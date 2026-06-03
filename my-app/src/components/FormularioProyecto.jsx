import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const FormularioProyecto = ({ alAgregarProyecto }) => {
    const [formulario, setFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
        pdf: "",
        drive: "",
        github: ""
    });

    const { titulo, categoria, estado, descripcion, pdf, drive, github } = formulario;

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
            alert("Complete los campos obligatorios: Título, Categoría y Estado");
            return;
        }

        alAgregarProyecto({
            titulo,
            categoria,
            estado,
            descripcion,
            recursos: {
                pdf,
                drive,
                github
            },
            equipo: []
        });

        setFormulario({
            titulo: "",
            categoria: "",
            estado: "",
            descripcion: "",
            pdf: "",
            drive: "",
            github: ""
        });
    };

    return (
        <Paper elevation={3} sx={{ padding: 4, marginBottom: 4, borderRadius: 2 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Registrar Nuevo Proyecto
            </Typography>
            
            <Box component="form" onSubmit={manejarEnvio} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <TextField
                        label="Título del Proyecto"
                        name="titulo"
                        value={titulo}
                        onChange={manejarCambioFormulario}
                        variant="outlined"
                        fullWidth
                        required
                        sx={{ flex: 1, minWidth: '250px' }}
                    />
                    <TextField
                        label="Categoría"
                        name="categoria"
                        value={categoria}
                        onChange={manejarCambioFormulario}
                        variant="outlined"
                        fullWidth
                        required
                        sx={{ flex: 1, minWidth: '200px' }}
                    />
                    <TextField
                        label="Estado"
                        name="estado"
                        value={estado}
                        onChange={manejarCambioFormulario}
                        variant="outlined"
                        fullWidth
                        required
                        sx={{ flex: 1, minWidth: '150px' }}
                    />
                </Box>

                <TextField
                    label="Descripción Extendida"
                    name="descripcion"
                    value={descripcion}
                    onChange={manejarCambioFormulario}
                    variant="outlined"
                    multiline
                    rows={3}
                    fullWidth
                    placeholder="Escribe los párrafos descriptivos..."
                />

                <Typography variant="subtitle1" sx={{ fontWeight: '600', marginTop: 1, color: '#555' }}>
                    Recursos y Enlaces Externos (Opcionales)
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <TextField
                        label="Enlace Documento PDF"
                        name="pdf"
                        value={pdf}
                        onChange={manejarCambioFormulario}
                        variant="outlined"
                        fullWidth
                        sx={{ flex: 1, minWidth: '200px' }}
                    />
                    <TextField
                        label="Enlace Carpeta Drive"
                        name="drive"
                        value={drive}
                        onChange={manejarCambioFormulario}
                        variant="outlined"
                        fullWidth
                        sx={{ flex: 1, minWidth: '200px' }}
                    />
                    <TextField
                        label="Enlace Repositorio GitHub"
                        name="github"
                        value={github}
                        onChange={manejarCambioFormulario}
                        variant="outlined"
                        fullWidth
                        sx={{ flex: 1, minWidth: '200px' }}
                    />
                </Box>

                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    sx={{ alignSelf: 'flex-start', paddingX: 4, fontWeight: 'bold' }}
                >
                    Agregar proyecto
                </Button>
            </Box>
        </Paper>
    );
};

export default FormularioProyecto;