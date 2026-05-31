import { useParams, Link } from "react-router-dom";
import proyectoService from "../services/proyectoService";

const DetalleProyecto = () => {
    const { id } = useParams();

    const proyecto = proyectoService
        .obtenerProyectos()
        .find((proyecto) => proyecto.id === Number(id));

    if (!proyecto) {
        return (
            <section className="detalle-proyecto">
                <h2>Proyecto no encontrado</h2>
                <Link to="/proyectos">Volver a proyectos</Link>
            </section>
        );
    }

    return (
        <section className="detalle-proyecto">
            <h2>{proyecto.titulo}</h2>
            <p><strong>Categoría:</strong> {proyecto.categoria}</p>
            <p><strong>Estado:</strong> {proyecto.estado}</p>
            <p><strong>Descripción:</strong> {proyecto.descripcion}</p>

            <Link to="/proyectos">Volver a proyectos</Link>
        </section>
    );
};

export default DetalleProyecto;