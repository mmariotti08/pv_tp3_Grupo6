import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

const Nav = () => {
    const { usuario } = useContext(UsuarioContext);

    const estiloEnlaceBloqueado = {
        pointerEvents: "none",
        opacity: 0.5,
        cursor: "not-allowed"
    };

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/proyectos" 
                        style={!usuario ? estiloEnlaceBloqueado : undefined}
                    >
                        Proyectos
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/perfil" 
                        style={!usuario ? estiloEnlaceBloqueado : undefined}
                    >
                        Perfil
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;