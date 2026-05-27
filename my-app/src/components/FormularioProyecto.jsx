import { useState } from "react";

const FormularioProyecto = ({ alAgregarProyecto }) => {
    const [formulario, setFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: ""
    });

    const { titulo, categoria, estado } = formulario;

    const manejarCambioFormulario = (evento) => {
        const { name, value } = evento.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const manejarEnvio = (evento) => {
        evento.preventDefault();

        if (titulo.trim() === "" || categoria.trim() === "" || estado.trim() === "") {
            alert("Complete todos los campos");
            return;
        }

        alAgregarProyecto({
            titulo,
            categoria,
            estado
        });

        setFormulario({
            titulo: "",
            categoria: "",
            estado: ""
        });
    };

    return (
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={titulo}
                onChange={manejarCambioFormulario}
            />

            <input
                type="text"
                name="categoria"
                placeholder="Categoría"
                value={categoria}
                onChange={manejarCambioFormulario}
            />

            <input
                type="text"
                name="estado"
                placeholder="Estado"
                value={estado}
                onChange={manejarCambioFormulario}
            />

            <button type="submit">Agregar proyecto</button>
        </form>
    );
};

export default FormularioProyecto;