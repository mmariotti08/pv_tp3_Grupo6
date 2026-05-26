import { useState, useEffect, useRef } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard"; 
import DetalleProyecto from "./DetalleProyecto"; 
import RegistroActividad from "./RegistroActividad";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("");
    const [ultimaModificacion, setUltimaModificacion] = useState(null);
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const esPrimerRender = useRef(true);

    useEffect(() => {
        if (esPrimerRender.current) {
            esPrimerRender.current = false;
            return;
        }
        setUltimaModificacion(new Date());
    }, [proyectos]);

    const manejarBusqueda = (evento) => {
        setBusqueda(evento.target.value);
    };

    const manejarAgregar = (evento) => {
        evento.preventDefault();

        if (titulo.trim() === "" || categoria.trim() === "" || estado.trim() === "") {
            alert("Complete todos los campos");
            return;
        }

        const nuevoProyecto = {
            titulo,
            categoria,
            estado
        };

        const listaActualizada = proyectoService.agregarProyecto(nuevoProyecto);

        setProyectos(listaActualizada);
        setTitulo("");
        setCategoria("");
        setEstado("");
        setBusqueda("");
    };

    const manejarEliminar = (id) => {
        const listaActualizada = proyectoService.eliminarProyecto(id);
        
        setProyectos(listaActualizada);

        if (proyectoSeleccionado?.id === id) {
            setProyectoSeleccionado(null);
        }
    };

    const proyectosFiltrados = proyectos.filter((proyecto) => {
        const query = busqueda.toLowerCase().trim();
        return (
            proyecto.titulo.toLowerCase().includes(query) ||
            proyecto.categoria.toLowerCase().includes(query)
        );
    });

    return (
        <section className="lista-proyectos">
            <h2>Lista de Proyectos</h2>

            <input
                type="text"
                placeholder="Buscar proyecto por título o categoría..."
                value={busqueda}
                onChange={manejarBusqueda}
            />

            <form onSubmit={manejarAgregar}>
                <input
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(evento) => setTitulo(evento.target.value)}
                />

                <input
                    type="text"
                    placeholder="Categoría"
                    value={categoria}
                    onChange={(evento) => setCategoria(evento.target.value)}
                />

                <input
                    type="text"
                    placeholder="Estado"
                    value={estado}
                    onChange={(evento) => setEstado(evento.target.value)}
                />

                <button type="submit">Agregar proyecto</button>
            </form>

            <div className="contenedor-proyectos">
                {proyectosFiltrados.map((proyecto) => (
                    <ProyectoCard 
                        key={proyecto.id} 
                        proyecto={proyecto} 
                        onEliminar={manejarEliminar} 
                        onDetalle={setProyectoSeleccionado} 
                    />
                ))}
            </div>

            <DetalleProyecto 
                proyecto={proyectoSeleccionado} 
                onCerrar={() => setProyectoSeleccionado(null)} 
            />

            <RegistroActividad ultimaModificacion={ultimaModificacion} />
        </section>
    );
};

export default ListaProyectos;