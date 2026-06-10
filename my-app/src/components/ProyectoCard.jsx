import { Card, CardContent, CardActions, Typography, Button, Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

const ProyectoCard = ({ proyecto, alEliminar, alCambiarEstado }) => {
    const { id, titulo, categoria, estado } = proyecto;

    const obtenerEstiloEstado = () => {
        if (estado === "En curso") {
            return {
                backgroundColor: "#fbc02d",
                color: "#333"
            };
        }

        if (estado === "Finalizado") {
            return {
                backgroundColor: "#d32f2f",
                color: "white"
            };
        }

        return {
            backgroundColor: "#2e7d32",
            color: "white"
        };
    };

    return (
        <Card 
            elevation={2} 
            sx={{ 
                minWidth: 275, 
                height: "100%", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between",
                borderRadius: 2,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 4
                }
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: "bold", mb: 1.5, color: "#1976d2" }}
                >
                    {titulo}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        <Box component="span" sx={{ fontWeight: "bold", color: "text.primary" }}>
                            Categoría:
                        </Box>{" "}
                        {categoria}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography variant="body2">
                            <Box component="span" sx={{ fontWeight: "bold", color: "text.primary" }}>
                                Estado:
                            </Box>
                        </Typography>

                        <Chip
                            label={estado}
                            onClick={() => alCambiarEstado(id)}
                            size="small"
                            sx={{
                                ...obtenerEstiloEstado(),
                                fontWeight: "bold",
                                cursor: "pointer",
                                "&:hover": {
                                    opacity: 0.85
                                }
                            }}
                        />
                    </Box>
                </Box>
            </CardContent>

            <CardActions sx={{ padding: 2, pt: 0, justifyContent: "space-between" }}>
                <Button 
                    component={Link} 
                    to={`/proyectos/${id}`} 
                    variant="contained" 
                    size="small"
                    color="primary"
                    startIcon={<VisibilityIcon />}
                    sx={{ fontWeight: "bold" }}
                >
                    Ver detalle
                </Button>

                <Button 
                    variant="outlined" 
                    size="small" 
                    color="error" 
                    onClick={() => alEliminar(id)}
                    startIcon={<DeleteIcon />}
                    sx={{ fontWeight: "bold" }}
                >
                    Eliminar
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProyectoCard;