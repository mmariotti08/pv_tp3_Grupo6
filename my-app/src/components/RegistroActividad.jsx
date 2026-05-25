import '../css/RegistroActividad.css'; 

const RegistroActividad = ({ ultimaModificacion }) => {
    
    if (!ultimaModificacion) {
        return (
            <div className="registro-actividad">
                <p>Aún no hay modificaciones en los proyectos.</p>
            </div>
        );
    }

    
    const fechaFormateada = new Date(ultimaModificacion).toLocaleString('es-AR', {
        dateStyle: 'short',
        timeStyle: 'medium'
    });

    return (
        <div className="registro-actividad">
            <p>
                <strong>Última modificación:</strong> {fechaFormateada}
            </p>
        </div>
    );
};

export default RegistroActividad;