import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
    const { usuario, cerrarSesion } = useContext(UsuarioContext);

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "30px 42px",
                gap: "20px"
            }}
        >
            <h1
                style={{
                    margin: 0,
                    fontSize: "36px",
                    fontWeight: "800",
                    lineHeight: "1.1"
                }}
            >
                Gestión de Proyectos Educativos
            </h1>

            {usuario && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        transform: "translateY(4px)"
                    }}
                >
                    <div
                        style={{
                            textAlign: "right",
                            minWidth: "90px"
                        }}
                    >
                        <span
                            style={{
                                fontWeight: "700",
                                fontSize: "18px",
                                display: "block",
                                color: "#ffffff",
                                lineHeight: "1.2"
                            }}
                        >
                            {usuario.nombre}
                        </span>

                        <small
                            style={{
                                color: "#cfd8dc",
                                fontSize: "13px",
                                display: "block",
                                textAlign: "right",
                                marginTop: "2px"
                            }}
                        >
                            {usuario.rol}
                        </small>
                    </div>

                    <button
                        onClick={cerrarSesion}
                        style={{
                            backgroundColor: "#d32f2f",
                            color: "white",
                            border: "none",
                            padding: "7px 12px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px"
                        }}
                    >
                        <LogoutIcon style={{ fontSize: "17px" }} />
                        Salir
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;