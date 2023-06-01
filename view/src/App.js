import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import InscripcionEstudiantes from "./pages/InscripcionEstudiantes";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="app-header">
          <div className="app-content">
            <Link to="/" className="app-link">
              Inicio
            </Link>
            <Link to="/inscripcion" className="app-link">
              Inscripción de Estudiantes
            </Link>
          </div>
        </nav>
      </div>

      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/inscripcion" element={<InscripcionEstudiantes />} />
      </Routes>
    </Router>
  );
};

export default App;
