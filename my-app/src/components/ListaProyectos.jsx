import { useState, useEffect, useRef } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard"; 
import DetalleProyecto from "./DetalleProyecto"; 
import RegistroActividad from "./RegistroActividad";
import FormularioProyecto from "./FormularioProyecto";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

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

    const manejarAgregar = (nuevoProyectoFormulario) => {
        const nuevoProyecto = {
            id: Date.now(),
            ...nuevoProyectoFormulario
        };

        const listaActualizada =
            proyectoService.agregarProyecto(nuevoProyecto);

        setProyectos(listaActualizada);
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

            <FormularioProyecto
                alAgregarProyecto={manejarAgregar}
            />

            <div className="contenedor-proyectos">
                {proyectosFiltrados.map((proyecto) => (
                    <ProyectoCard 
                        key={proyecto.id} 
                        proyecto={proyecto} 
                        alEliminar={manejarEliminar} 
                        onDetalle={setProyectoSeleccionado} 
                    />
                ))}
            </div>
            
            <RegistroActividad ultimaModificacion={ultimaModificacion} />

            <DetalleProyecto 
                proyecto={proyectoSeleccionado} 
                onCerrar={() => setProyectoSeleccionado(null)} 
            />

            
        </section>
    );
};

export default ListaProyectos;