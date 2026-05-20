import React from 'react';

const DetalleProyecto = ({ proyecto, onCerrar }) => {
    if (!proyecto) return null;

    const { titulo, descripcion, recursos, equipo } = proyecto;
    const parrafos = descripcion ? descripcion.split('\n\n') : [];

    return (
        <aside className="detalle-proyecto">
            <h2>Detalle del Proyecto</h2>
            <h3>{titulo}</h3>
            
            <section className="detalle-seccion">
                <h4>Descripción</h4>
                {parrafos.map((parrafo, index) => (
                    <p key={index}>{parrafo}</p>
                ))}
            </section>

            <section className="detalle-seccion">
                <h4>Recursos Disponibles</h4>
                <ul className="lista-recursos">
                    {recursos?.pdf && (
                        <li>
                            <a href={recursos.pdf} target="_blank" rel="noopener noreferrer">
                                📄 Documento PDF
                            </a>
                        </li>
                    )}
                    {recursos?.drive && (
                        <li>
                            <a href={recursos.drive} target="_blank" rel="noopener noreferrer">
                                📂 Carpeta de Drive
                            </a>
                        </li>
                    )}
                    {recursos?.github && (
                        <li>
                            <a href={recursos.github} target="_blank" rel="noopener noreferrer">
                                💻 Repositorio GitHub
                            </a>
                        </li>
                    )}
                </ul>
            </section>

            <section className="detalle-seccion">
                <h4>Equipo de Trabajo</h4>
                <ul className="lista-equipo">
                    {equipo?.map((integrante, index) => (
                        <li key={index}>
                            <strong>{integrante.nombre}</strong> — {integrante.rol}
                        </li>
                    ))}
                </ul>
            </section>

            <button className="btn-cerrar-detalle" onClick={onCerrar}>
                Cerrar
            </button>
        </aside>
    );
};

export default DetalleProyecto;