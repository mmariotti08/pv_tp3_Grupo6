import "../css/RegistroActividad.css";

const RegistroActividad = ({ ultimaModificacion }) => {

    if (!ultimaModificacion) {
        return (
            <div className="registro-actividad">
                <p>Aún no hay modificaciones en los proyectos.</p>
            </div>
        );
    }

    const fecha = new Date(ultimaModificacion);

    const fechaFormateada = fecha.toLocaleDateString("es-AR");

    const horaFormateada = fecha.toLocaleTimeString(
        "es-AR",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );

    return (
        <div className="registro-actividad">
            <p>
                Última actualización de la lista: {fechaFormateada} a las {horaFormateada} hs.
            </p>
        </div>
    );
};

export default RegistroActividad;