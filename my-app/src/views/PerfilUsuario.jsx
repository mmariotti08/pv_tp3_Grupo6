import {
    Container,
    Typography,
    Paper,
    Box
} from "@mui/material";

const PerfilUsuario = () => {

    return (
        <Container sx={{ mt: 4 }}>

            <Typography
                variant="h3"
                gutterBottom
            >
                Perfil de Usuario
            </Typography>

            <Paper
                elevation={3}
                sx={{
                    p: 3
                }}
            >
                <Box>
                    <Typography variant="h6">
                        Nombre:
                    </Typography>

                    <Typography>
                        Agustín Benjamín Ortega
                    </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="h6">
                        Rol:
                    </Typography>

                    <Typography>
                        Estudiante
                    </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="h6">
                        Institución:
                    </Typography>

                    <Typography>
                        Facultad de Ingeniería - UNJu
                    </Typography>
                </Box>

            </Paper>

        </Container>
    );
};

export default PerfilUsuario;