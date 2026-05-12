import "./css/styles.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ListaProyectos from "./components/ListaProyectos";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Nav />

            <main>
                <ListaProyectos />
            </main>

            <Footer />
        </>
    );
};

export default App;