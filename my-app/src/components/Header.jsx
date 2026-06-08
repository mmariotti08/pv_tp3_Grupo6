import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

const Header = () => {

    const { usuario } = useContext(UsuarioContext);
    return (
        <header>
            <h1>Gestión de Proyectos Educativos</h1>

            <div>
                {usuario.nombre} | {usuario.rol}
            </div>
        </header>
    );
};
export default Header;