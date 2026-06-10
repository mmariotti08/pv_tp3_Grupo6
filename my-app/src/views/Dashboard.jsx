import { useState, useContext, useEffect } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import proyectoService from "../services/proyectoService";
import { Container, Typography, Box, Card, CardContent, Grid, TextField, Button, Alert, Paper } from "@mui/material";

const Dashboard = () => {
    const { usuario, iniciarSesion } = useContext(UsuarioContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

useEffect(() => {
        const actualizarProyectos = () => {
            setProyectos(proyectoService.obtenerProyectos());
        };

        window.addEventListener("proyectosActualizados", actualizarProyectos);

        return () => {
            window.removeEventListener("proyectosActualizados", actualizarProyectos);
        };
    }, []);   

    const totalProyectos = proyectos.length;

    const proyectosEnCurso = proyectos.filter(
        (proyecto) => proyecto.estado.toLowerCase() === "en curso"
    ).length;

    const manejarEnvio = (e) => {
        e.preventDefault();
        const exito = iniciarSesion(email, password);
        if (!exito) {
            setError(true);
        } else {
            setError(false);
        }
    };

    if (!usuario) {
        return (
            <Container maxWidth="xs" sx={{ mt: 8 }}>
                <Paper elevation={0} sx={{ p: 0 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
                        Iniciar Sesión
                    </Typography>

                    {error && (
                        <Alert severity="error" variant="filled" sx={{ mb: 2, bgcolor: "#f44336", color: "white" }}>
                            Usuario o contraseña incorrecto
                        </Alert>
                    )}

                    <Box component="form" onSubmit={manejarEnvio} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Typography variant="body2" sx={{ mb: -1, fontWeight: "500" }}>Email:</Typography>
                        <TextField
                            type="email"
                            variant="outlined"
                            fullWidth
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size="small"
                        />
                        <Typography variant="body2" sx={{ mb: -1, fontWeight: "500" }}>Contraseña:</Typography>
                        <TextField
                            type="password"
                            variant="outlined"
                            fullWidth
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            size="small"
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            sx={{ 
                                alignSelf: "flex-start", 
                                px: 3, 
                                bgcolor: "#e0e0e0", 
                                color: "black",
                                boxShadow: "none",
                                border: "1px solid #b5b5b5",
                                "&:hover": { bgcolor: "#d5d5d5", boxShadow: "none" },
                                textTransform: "none"
                            }}
                        >
                            Ingresar
                        </Button>
                    </Box>
                </Paper>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3" gutterBottom>
                Dashboard
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
                Bienvenido al sistema de gestión de proyectos educativos.
                Desde aquí podrás visualizar información general de los proyectos.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">
                                Total de proyectos
                            </Typography>
                            <Typography variant="h3">
                                    {totalProyectos}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">
                                Proyectos en curso
                            </Typography>
                            <Typography variant="h3">
                                {proyectosEnCurso}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;