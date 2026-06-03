import { Card, CardContent, CardActions, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const ProyectoCard = ({ proyecto, alEliminar }) => {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <Card 
      elevation={2} 
      sx={{ 
        minWidth: 275, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        borderRadius: 2,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 4
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1.5, color: '#1976d2' }}>
          {titulo}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="body2" color="text.secondary">
            <Box component="span" sx={{ fontWeight: 'bold', color: 'text.primary' }}>Categoría:</Box> {categoria}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <Box component="span" sx={{ fontWeight: 'bold', color: 'text.primary' }}>Estado:</Box> {estado}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ padding: 2, pt: 0, justifyContent: 'space-between' }}>
        <Button 
          component={Link} 
          to={`/proyectos/${id}`} 
          variant="contained" 
          size="small"
          color="primary"
          startIcon={<VisibilityIcon />}
          sx={{ fontWeight: 'bold' }}
        >
          Ver detalle
        </Button>

        <Button 
          variant="outlined" 
          size="small" 
          color="error" 
          onClick={() => alEliminar(id)}
          startIcon={<DeleteIcon />}
          sx={{ fontWeight: 'bold' }}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProyectoCard;
