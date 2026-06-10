import { createContext, useState, useEffect } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    
    const obtenerUsuarioInicial = () => {
        const usuarioGuardado = localStorage.getItem("usuarioPerfil");
        if (usuarioGuardado) {
            return JSON.parse(usuarioGuardado);
        }
        return null;
    };

    const [usuario, setUsuario] = useState(obtenerUsuarioInicial);

    useEffect(() => {
        if (usuario) {
            localStorage.setItem("usuarioPerfil", JSON.stringify(usuario));
        } else {
            localStorage.removeItem("usuarioPerfil");
        }
    }, [usuario]);

    const iniciarSesion = (email, password) => {
        if (email === "benjamin@gmail.com" && password === "12345") {
            setUsuario({
                nombre: "Benjamin Ortega",
                dni: "12345678",
                rol: "Alumno",
                institucion: "UNJu"
            });
            return true;
        }
        return false;
    };

    const cerrarSesion = () => {
        setUsuario(null);
    };
  
    const actualizarPerfil = (nuevosDatos) => {
        setUsuario((estadoAnterior) => ({
            ...estadoAnterior,
            ...nuevosDatos
        }));
    };

    return (
        <UsuarioContext.Provider value={{ usuario, iniciarSesion, cerrarSesion, actualizarPerfil }}>
            {children}
        </UsuarioContext.Provider>
    );
};