import { useState, useEffect, useRef } from "react";
import { Container, Grid, TextField, Typography, Box } from "@mui/material";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "../components/ProyectoCard";
import FormularioProyecto from "../components/FormularioProyecto";
import RegistroActividad from "../components/RegistroActividad";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [busqueda, setBusqueda] = useState("");
  const [ultimaModificacion, setUltimaModificacion] = useState(null);

  const esPrimerRender = useRef(true);

  useEffect(() => {
    if (esPrimerRender.current) {
      esPrimerRender.current = false;
      return;
    }
    setUltimaModificacion(new Date());
  }, [proyectos]);

  const manejarBusqueda = (evento) => {
    setBusqueda(evento.target.value);
  };

  const manejarAgregar = (nuevoProyectoFormulario) => {
    const nuevoProyecto = {
      id: Date.now(),
      ...nuevoProyectoFormulario,
    };

    const listaActualizada = proyectoService.agregarProyecto(nuevoProyecto);

    setProyectos(listaActualizada);
    setBusqueda("");
  };

  const manejarEliminar = (id) => {
    const listaActualizada = proyectoService.eliminarProyecto(id);
    setProyectos(listaActualizada);
  };

  const manejarCambiarEstado = (id) => {
    const listaActualizada = proyectoService.cambiarEstadoProyecto(id);
    setProyectos(listaActualizada);
  };

  const proyectosFiltrados = proyectos.filter((proyecto) => {
    const query = busqueda.toLowerCase().trim();
    return (
      proyecto.titulo.toLowerCase().includes(query) ||
      proyecto.categoria.toLowerCase().includes(query)
    );
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 4,
          textAlign: "center",
          color: "#0d47a1",
        }}
      >
        Gestión de Proyectos
      </Typography>

      <FormularioProyecto alAgregarProyecto={manejarAgregar} />

      <Box sx={{ my: 4 }}>
        <TextField
          label="Buscar proyecto por título o categoría..."
          variant="outlined"
          fullWidth
          value={busqueda}
          onChange={manejarBusqueda}
        />
      </Box>

      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        sx={{ fontWeight: "600", mb: 2 }}
      >
        Lista de Proyectos
      </Typography>

      <Grid container spacing={3}>
        {proyectosFiltrados.map((proyecto) => (
          <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
            <ProyectoCard
              proyecto={proyecto}
              alEliminar={manejarEliminar}
              alCambiarEstado={manejarCambiarEstado}
            />
          </Grid>
        ))}
      </Grid>

      <RegistroActividad ultimaModificacion={ultimaModificacion} />
    </Container>
  );
};

export default ListaProyectos;
