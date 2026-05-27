import "../css/proyectoCard.css";

const ProyectoCard = ({ proyecto, alEliminar, onDetalle }) => {
    const { id, titulo, categoria, estado } = proyecto;

    return (
        <article className="card-proyecto">
            <h3>{titulo}</h3>

            <p>
                <strong>Categoría:</strong> {categoria}
            </p>

            <p>
                <strong>Estado:</strong> {estado}
            </p>

            <div className="botones-card">
                <button type="button" onClick={() => onDetalle(proyecto)}>
                    Ver detalle
                </button>

                <button type="button" onClick={() => alEliminar(id)}>
                    Eliminar
                </button>
            </div>
        </article>
    );
};

export default ProyectoCard;