import "../css/proyectoCard.css";
import { Link } from "react-router-dom";

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
<Link className="boton-detalle" to={`/proyectos/${id}`}>
    Ver detalle
</Link>

<button className="boton-eliminar" type="button" onClick={() => alEliminar(id)}>
    Eliminar
</button>
</div>
    </article>
  );
};

export default ProyectoCard;
