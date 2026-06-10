import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./css/styles.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ListaProyectos from "./views/ListaProyectos";
import DetalleProyecto from "./views/DetalleProyecto";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";
import PerfilUsuario from "./views/PerfilUsuario";
import { UsuarioContext, UsuarioProvider } from "./context/UsuarioContext";

const AppContenido = () => {
    const { usuario } = useContext(UsuarioContext);

    return (
        <>
            <Header />
            <Nav />
            
            <main>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    
                    <Route 
                        path="/proyectos" 
                        element={usuario ? <ListaProyectos /> : <Navigate to="/" />} 
                    />
                    <Route 
                        path="/proyectos/:id" 
                        element={usuario ? <DetalleProyecto /> : <Navigate to="/" />} 
                    />
                    <Route 
                        path="/perfil" 
                        element={usuario ? <PerfilUsuario /> : <Navigate to="/" />} 
                    />
                </Routes>
            </main>

            <Footer />
        </>
    );
};

const App = () => {
    return (
        <UsuarioProvider>
            <AppContenido />
        </UsuarioProvider>
    );
};

export default App;