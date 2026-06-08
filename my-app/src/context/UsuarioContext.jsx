import { createContext, useState, useEffect } from 'react';


export const UsuarioContext = createContext();


export const UsuarioProvider = ({ children }) => {
    
   
    const obtenerUsuarioInicial = () => {
        const usuarioGuardado = localStorage.getItem("usuarioPerfil");
        
        
        if (usuarioGuardado) {
            return JSON.parse(usuarioGuardado);
        }
               
        return {
            nombre: "Matías",
            dni: "12345678",
            rol: "Alumno",
            institucion: "UNJu"
        };
    };


    const [usuario, setUsuario] = useState(obtenerUsuarioInicial);


    useEffect(() => {
        
        localStorage.setItem("usuarioPerfil", JSON.stringify(usuario));
    }, [usuario]);

  
    const actualizarPerfil = (nuevosDatos) => {
        setUsuario((estadoAnterior) => ({
            ...estadoAnterior,
            ...nuevosDatos
        }));
    };

    return (
        <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
            {children}
        </UsuarioContext.Provider>
    );
};