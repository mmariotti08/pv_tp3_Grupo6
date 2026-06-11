import { useContext, useEffect, useState } from "react";
import {
    Container,
    Typography,
    Paper,
    Box,
    TextField,
    Button,
    MenuItem,
    Alert
} from "@mui/material";
import { UsuarioContext } from "../context/UsuarioContext";

const PerfilUsuario = () => {
    const { usuario, actualizarPerfil } = useContext(UsuarioContext);

    const [editando, setEditando] = useState(false);
    const [mensaje, setMensaje] = useState(false);

    const [formulario, setFormulario] = useState({
        nombre: "",
        dni: "",
        rol: "Alumno",
        institucion: ""
    });

    useEffect(() => {
        if (usuario) {
            setFormulario({
                nombre: usuario.nombre || "",
                dni: usuario.dni || "",
                rol: usuario.rol || "Alumno",
                institucion: usuario.institucion || ""
            });
        }
    }, [usuario]);

    const manejarCambio = (evento) => {
        const { name, value } = evento.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const manejarEditar = () => {
        setEditando(true);
        setMensaje(false);
    };

    const manejarCancelar = () => {
        setFormulario({
            nombre: usuario.nombre || "",
            dni: usuario.dni || "",
            rol: usuario.rol || "Alumno",
            institucion: usuario.institucion || ""
        });

        setEditando(false);
        setMensaje(false);
    };

    const manejarGuardar = (evento) => {
        evento.preventDefault();

        if (
            formulario.nombre.trim() === "" ||
            formulario.dni.trim() === "" ||
            formulario.rol.trim() === "" ||
            formulario.institucion.trim() === ""
        ) {
            alert("Complete todos los campos del perfil");
            return;
        }

        actualizarPerfil(formulario);
        setEditando(false);
        setMensaje(true);
    };

    if (!usuario) {
        return (
            <Container sx={{ mt: 4 }}>
                <Alert severity="warning">
                    No hay un usuario activo. Iniciá sesión para ver el perfil.
                </Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    color: "#0d47a1",
                    textAlign: "center",
                    mb: 4
                }}
            >
                Perfil de Usuario
            </Typography>

            {mensaje && (
                <Alert severity="success" sx={{ mb: 3 }}>
                    Perfil actualizado correctamente.
                </Alert>
            )}

            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    maxWidth: "700px",
                    marginX: "auto"
                }}
            >
                <Box
                    component="form"
                    onSubmit={manejarGuardar}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3
                    }}
                >
                    <TextField
                        label="Nombre"
                        name="nombre"
                        value={formulario.nombre}
                        onChange={manejarCambio}
                        disabled={!editando}
                        fullWidth
                        required
                    />

                    <TextField
                        label="DNI"
                        name="dni"
                        value={formulario.dni}
                        onChange={manejarCambio}
                        disabled={!editando}
                        fullWidth
                        required
                    />

                    <TextField
                        select
                        label="Rol"
                        name="rol"
                        value={formulario.rol}
                        onChange={manejarCambio}
                        disabled={!editando}
                        fullWidth
                        required
                    >
                        <MenuItem value="Alumno">Alumno</MenuItem>
                        <MenuItem value="Docente">Docente</MenuItem>
                    </TextField>

                    <TextField
                        label="Institución"
                        name="institucion"
                        value={formulario.institucion}
                        onChange={manejarCambio}
                        disabled={!editando}
                        fullWidth
                        required
                    />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: 2,
                            mt: 1
                        }}
                    >
                        {!editando ? (
                            <Button
                                type="button"
                                variant="contained"
                                onClick={manejarEditar}
                                sx={{ fontWeight: "bold" }}
                            >
                                Editar Perfil
                            </Button>
                        ) : (
                            <>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    color="error"
                                    onClick={manejarCancelar}
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Cancelar
                                </Button>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Guardar Cambios
                                </Button>
                            </>
                        )}
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default PerfilUsuario;