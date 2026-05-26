import { useState } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard";
import RegistroActividad from "./RegistroActividad";
import FormularioProyecto from "./FormularioProyecto";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [busqueda, setBusqueda] = useState("");
    const [ultimaModificacion, setUltimaModificacion] = useState(null);

    const manejarBusqueda = (evento) => {
        const texto = evento.target.value;

        setBusqueda(texto);

        if (texto.trim() === "") {
            setProyectos(proyectoService.obtenerProyectos());
        } else {
            setProyectos(proyectoService.buscarProyecto(texto));
        }
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
        setUltimaModificacion(new Date());
    };

    const manejarEliminar = (id) => {
        const listaActualizada =
            proyectoService.eliminarProyecto(id);

        setProyectos(listaActualizada);

        setUltimaModificacion(new Date());
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

            <FormularioProyecto
                alAgregarProyecto={manejarAgregar}
            />

            <div className="contenedor-proyectos">

                {proyectos.map((proyecto) => (
                    <ProyectoCard
                        key={proyecto.id}
                        proyecto={proyecto}
                        alEliminar={manejarEliminar}
                    />
                ))}

            </div>

            <RegistroActividad
                ultimaModificacion={ultimaModificacion}
            />

        </section>
    );
};

export default ListaProyectos;