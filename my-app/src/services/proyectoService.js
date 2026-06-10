const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: "Sistema de Tutorías Virtuales",
      categoria: "Programación",
      estado: "En curso",
      descripcion:
        "Esta plataforma tiene como objetivo principal conectar a estudiantes que requieren apoyo académico con tutores especializados en diversas materias. El sistema gestionará la reserva de turnos, salas de videoconferencia y el seguimiento de los objetivos de aprendizaje.\n\nA través de una interfaz dinámica e intuitiva, los coordinadores podrán evaluar el rendimiento de las tutorías. Además, permitirá recopilar estadísticas en tiempo real para mejorar continuamente las estrategias de enseñanza de la institución educativa.",
      recursos: {
        pdf: "https://ejemplo.com/recursos/tutorias-manual.pdf",
        drive: "https://ejemplo.com/drive/tutorias-compartido",
        github: "https://github.com/ejemplo/tutorias-virtuales",
      },
      equipo: [
        { nombre: "Juan Pérez", rol: "Desarrollador Frontend" },
        { nombre: "Ana Gómez", rol: "Diseñadora UX/UI" },
        { nombre: "Carlos López", rol: "Desarrollador Backend" },
      ],
    },
    {
      id: 2,
      titulo: "Biblioteca Escolar Digital",
      categoria: "Base de Datos",
      estado: "Finalizado",
      descripcion:
        "Un sistema web diseñado para digitalizar el catálogo de libros físicos de la institución y permitir el préstamo de material de lectura en formato digital. Resuelve la problemática del acceso limitado a la bibliografía obligatoria fuera del horario escolar.\n\nEl motor de búsqueda avanzado permite filtrar por autor, año, materia y palabras clave. Cuenta con un panel de administración robusto para la carga de nuevos ejemplares y la gestión de penalizaciones por devoluciones tardías.",
      recursos: {
        pdf: "https://ejemplo.com/recursos/biblioteca-diseno.pdf",
        drive: "https://ejemplo.com/drive/biblioteca-archivos",
        github: "https://github.com/ejemplo/biblioteca-digital",
      },
      equipo: [
        { nombre: "María Rodríguez", rol: "Especialista en Base de Datos" },
        { nombre: "Luis Martínez", rol: "Desarrollador Fullstack" },
      ],
    },
    {
      id: 3,
      titulo: "Portal de Cursos Online",
      categoria: "Diseño Web",
      estado: "En curso",
      descripcion:
        "Una plataforma educativa de e-learning pensada para la comunidad abierta que busca dictar cursos cortos de formación profesional. El sistema soporta la carga de contenidos en video, cuestionarios autoevaluativos y foros de discusión por cada módulo.\n\nEl diseño se enfoca en la accesibilidad web, permitiendo que personas con diferentes capacidades puedan navegar sin inconvenientes. Incluye un sistema automatizado para la generación y descarga de certificados en PDF al aprobar el trayecto.",
      recursos: {
        pdf: "https://ejemplo.com/recursos/portal-propuesta.pdf",
        drive: "https://ejemplo.com/drive/portal-videos",
        github: "https://github.com/ejemplo/portal-cursos",
      },
      equipo: [
        { nombre: "Sofía Altamirano", rol: "Diseñadora Web / Maquetadora" },
        { nombre: "Pedro Fernández", rol: "Coordinador de Contenidos" },
      ],
    },
    {
      id: 4,
      titulo: "Agenda Académica",
      categoria: "Programación",
      estado: "Finalizado",
      descripcion:
        "Aplicación móvil y web orientada a que los estudiantes universitarios organicen sus horarios de cursada, fechas de exámenes parciales y entregas de trabajos prácticos. Envía notificaciones push automáticas un día antes de cada evento crítico.\n\nPermite sincronizar los calendarios personales con los cronogramas oficiales publicados por la facultad. Cuenta también con un módulo de cálculo estimado de promedio académico según las notas cargadas.",
      recursos: {
        pdf: "https://ejemplo.com/recursos/agenda-requisitos.pdf",
        drive: "https://ejemplo.com/drive/agenda-multimedia",
        github: "https://github.com/ejemplo/agenda-academica",
      },
      equipo: [
        { nombre: "Marcos Medina", rol: "Desarrollador Mobile" },
        { nombre: "Elena Benítez", rol: "QA Tester" },
      ],
    },
    {
      id: 5,
      titulo: "Gestión de Proyectos Educativos",
      categoria: "Gestión",
      estado: "En curso",
      descripcion:
        "La herramienta oficial que estamos desarrollando en esta cátedra. Permite realizar el seguimiento pormenorizado de las distintas iniciativas tecnológicas que nacen en la universidad, centralizando la lógica y las vistas en un entorno React.\n\nFacilita la transparencia de los recursos asignados y el estado actual de los entregables de cada grupo de alumnos. Su arquitectura modular garantiza que en próximas etapas se puedan integrar fácilmente sistemas de autenticación y roles de usuario.",
      recursos: {
        pdf: "https://ejemplo.com/recursos/gestion-especificacion.pdf",
        drive: "https://ejemplo.com/drive/gestion-entregas",
        github: "https://github.com/ejemplo/gestion-proyectos",
      },
      equipo: [
        { nombre: "Vos y tu Grupo de TP", rol: "Desarrolladores de Software" },
      ],
    },
  ];

  const CLAVE_PROYECTOS = "proyectosGuardados";

  const cargarProyectos = () => {
    const proyectosGuardados = localStorage.getItem(CLAVE_PROYECTOS);

    if (proyectosGuardados) {
      return JSON.parse(proyectosGuardados);
    }

    localStorage.setItem(CLAVE_PROYECTOS, JSON.stringify(proyectos));
    return proyectos;
  };

  proyectos = cargarProyectos();

  const guardarProyectos = () => {
    localStorage.setItem(CLAVE_PROYECTOS, JSON.stringify(proyectos));
    window.dispatchEvent(new Event("proyectosActualizados"));
  };

  const obtenerProyectos = () => [...proyectos];

  const agregarProyecto = (proyecto) => {
    if (!proyecto.titulo || proyecto.titulo.trim() === "") {
      return obtenerProyectos();
    }

    const nuevoId =
    proyectos.length > 0 ? Math.max(...proyectos.map((p) => p.id)) + 1 : 1;

    proyectos = [...proyectos, { ...proyecto, id: nuevoId }];

    guardarProyectos();

    return obtenerProyectos();
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter((proyecto) => proyecto.id !== id);

    guardarProyectos();

    return obtenerProyectos();
  };

const cambiarEstadoProyecto = (id) => {
  const estados = ["Disponible", "En curso", "Finalizado"];

  proyectos = proyectos.map((proyecto) => {
    if (Number(proyecto.id) !== Number(id)) {
      return proyecto;
    }

    const estadoActual = estados.includes(proyecto.estado)
      ? proyecto.estado
      : "Disponible";

    const indiceActual = estados.indexOf(estadoActual);
    const nuevoEstado = estados[(indiceActual + 1) % estados.length];

    return {
      ...proyecto,
      estado: nuevoEstado,
    };
  });

  guardarProyectos();

  return obtenerProyectos();
};

  const buscarProyecto = (texto) => {
    const query = texto.trim().toLowerCase();

    return proyectos.filter(
      (proyecto) =>
        proyecto.titulo.toLowerCase().includes(query) ||
        proyecto.categoria.toLowerCase().includes(query),
    );
  };

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    cambiarEstadoProyecto,
    buscarProyecto,
  };
})();

export default proyectoService;
