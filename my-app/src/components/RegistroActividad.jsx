import { Alert, AlertTitle, Box } from "@mui/material";

const RegistroActividad = ({ ultimaModificacion }) => {
    if (!ultimaModificacion) return null;

    const fecha = new Date(ultimaModificacion);
    const fechaFormateada = fecha.toLocaleDateString("es-AR");
    const horaFormateada = fecha.toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit"
    });

    return (
        <Box sx={{ width: "100%", marginTop: 3, marginBottom: 2 }}>
            <Alert 
                severity="info" 
                variant="standard"
                sx={{ 
                    borderRadius: 2, 
                    fontWeight: "500",
                    boxShadow: 1
                }}
            >
                <AlertTitle sx={{ fontWeight: "bold" }}>Registro de Actividad</AlertTitle>
                Última actualización de la lista: <strong>{fechaFormateada}</strong> a las <strong>{horaFormateada} hs.</strong>
            </Alert>
        </Box>
    );
};

export default RegistroActividad;