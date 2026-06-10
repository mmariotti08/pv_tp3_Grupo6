import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({
        nombre: "Benjamin Ortega",
        dni: "12345678",
        rol: "Alumno",
        institucion: "Facultad de Ingeniería - UNJU"
    });

    const actualizarPerfil = (nuevosDatos) => {
        setUsuario(nuevosDatos);
    };

    useEffect(() => {
        localStorage.setItem("usuario_session", JSON.stringify(usuario));
    }, [usuario]);

    return (
        <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
            {children}
        </UsuarioContext.Provider>
    );
};