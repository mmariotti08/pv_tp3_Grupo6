import { useState } from "react";
import proyectoService from "../services/proyectoService";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("");

    const manejarBusqueda = (evento) => {
        const texto = evento.target.value;

        setBusqueda(texto);

        if (texto.trim() === "") {
            setProyectos(proyectoService.obtenerProyectos());
        } else {
            setProyectos(proyectoService.buscarProyecto(texto));
        }
    };

    const manejarAgregar = (evento) => {
        evento.preventDefault();

        if (titulo.trim() === "" || categoria.trim() === "" || estado.trim() === "") {
            alert("Complete todos los campos");
            return;
        }

        const nuevoProyecto = {
            id: Date.now(),
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
    };

    return (
        <section className="lista-proyectos">
            <h2>Lista de Proyectos</h2>

            <input
                type="text"
                placeholder="Buscar proyecto por título..."
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
                {proyectos.map((proyecto) => (
                    <article className="card-proyecto" key={proyecto.id}>
                        <h3>{proyecto.titulo}</h3>
                        <p><strong>Categoría:</strong> {proyecto.categoria}</p>
                        <p><strong>Estado:</strong> {proyecto.estado}</p>
                        <button onClick={() => manejarEliminar(proyecto.id)}>
                            Eliminar
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ListaProyectos;