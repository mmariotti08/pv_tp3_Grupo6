import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    const { usuario, cerrarSesion } = useContext(UsuarioContext);

    return (
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
            <h1>Gestión de Proyectos Educativos</h1>
            
            {usuario && (
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <div style={{ textAlign: "right" }}>
                        <span style={{ fontWeight: "bold", display: "block" }}>{usuario.nombre}</span>
                        <small style={{ color: "#666", display: "block", textAlign: "right" }}>{usuario.rol}</small>
                    </div>
                    <button 
                        onClick={cerrarSesion}
                        style={{
                            backgroundColor: "#d32f2f",
                            color: "white",
                            border: "none",
                            padding: "6px 12px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px"
                        }}
                    >
                        <LogoutIcon style={{ fontSize: "18px" }} />
                        Salir
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;