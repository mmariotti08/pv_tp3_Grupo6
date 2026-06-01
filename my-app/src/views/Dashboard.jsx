import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Grid
} from "@mui/material";

const Dashboard = () => {

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
                                12
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
                                5
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Dashboard;