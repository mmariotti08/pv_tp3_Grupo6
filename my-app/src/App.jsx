import { Routes, Route } from "react-router-dom";
import "./css/styles.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ListaProyectos from "./views/ListaProyectos";
import DetalleProyecto from "./views/DetalleProyecto";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";
import PerfilUsuario from "./views/PerfilUsuario";
import { UsuarioProvider } from "./context/UsuarioContext";

const App = () => {
    return (
        <UsuarioProvider>
        <>
            <Header/>
            <Nav />
            
            <main>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/proyectos" element={<ListaProyectos />} />
                    <Route path="/proyectos/:id" element={<DetalleProyecto />} />
                    <Route path="/perfil" element={<PerfilUsuario />} />
                </Routes>
            </main>

            <Footer />
        </>
        </UsuarioProvider>
    );
};

export default App;