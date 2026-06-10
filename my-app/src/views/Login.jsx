import { useState, useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Container, Box, Typography, TextField, Button, Alert, Paper, Grid } from "@mui/material";

const Login = () => {
    const { iniciarSesion } = useContext(UsuarioContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();
        const exito = iniciarSesion(email, password);
        if (!exito) {
            setError(true);
        } else {
            setError(false);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
                        Portal del Sitio
                    </Typography>
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
                            Iniciar Sesión
                        </Typography>

                        {error && (
                            <Alert severity="error" sx={{ mb: 2 }}>
                                Usuario o contraseña incorrecto
                            </Alert>
                        )}

                        <Box component="form" onSubmit={manejarEnvio} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Contraseña"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button 
                                type="submit" 
                                variant="contained" 
                                size="large" 
                                sx={{ alignSelf: "flex-start", px: 4 }}
                            >
                                Ingresar
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;