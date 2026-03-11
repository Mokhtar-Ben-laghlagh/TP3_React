import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Connexion from "./Connexion";
import Apropos from "./Apropos";
import Accueil from "./Accueil";

function App() {
    return (
        <div>
            <h1 classname="titre">Mon Application React</h1>
            <nav>
                <Link to="/">Accueil</Link> |{" "}
                <Link to="/apropos">À propos</Link>
            </nav>
            <Connexion />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/apropos" element={<Apropos />} />
            </Routes>
        </div>
    );
}

export default App;