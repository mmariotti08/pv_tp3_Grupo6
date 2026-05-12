const proyectoService = (() => {
    let proyectos = [
        { id: 1, titulo: "Sistema de Tutorías Virtuales", categoria: "Programación", estado: "En curso" },
        { id: 2, titulo: "Biblioteca Escolar Digital", categoria: "Base de Datos", estado: "Finalizado" },
        { id: 3, titulo: "Portal de Cursos Online", categoria: "Diseño Web", estado: "En curso" },
        { id: 4, titulo: "Agenda Académica", categoria: "Programación", estado: "Finalizado" },
        { id: 5, titulo: "Gestión de Proyectos Educativos", categoria: "Gestión", estado: "En curso" }
    ];

    const obtenerProyectos = () => [...proyectos];

    const agregarProyecto = (proyecto) => {
        proyectos = [...proyectos, proyecto];
        return obtenerProyectos();
    };

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter((proyecto) => proyecto.id !== id);
        return obtenerProyectos();
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter((proyecto) =>
            proyecto.titulo.toLowerCase().includes(texto.toLowerCase())
        );
    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };
})();

export default proyectoService;