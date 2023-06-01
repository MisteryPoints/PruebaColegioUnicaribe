import React from "react";
import RegistroPersona from "../components/RegistroPersona";
import RegistroAula from "../components/RegistroAula";
import RegistroAsignatura from "../components/RegistroAsignatura";
import RegistroProfesor from "../components/RegistroProfesor";
import SistemaCobros from "../components/SistemaCobros";
import "./inicio.css";

const Inicio = () => {
  return (
    <div className="init">
      <h1>Página de Inicio</h1>
      <div className="division">
        <RegistroPersona />
        <RegistroAula />
        <RegistroAsignatura />
        <RegistroProfesor />
        <SistemaCobros />
      </div>
    </div>
  );
};

export default Inicio;
