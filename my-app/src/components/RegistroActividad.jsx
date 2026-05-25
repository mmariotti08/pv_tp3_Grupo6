const RegistroActividad = ({ fecha }) => {

    if (!fecha) {
        return null;
    }

    const fechaFormateada = fecha.toLocaleDateString("es-AR");

    const horaFormateada = fecha.toLocaleTimeString(
        "es-AR",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );

    return (
        <p>
            Última actualización de la lista: {fechaFormateada} a las {horaFormateada} hs.
        </p>
    );
};

export default RegistroActividad;