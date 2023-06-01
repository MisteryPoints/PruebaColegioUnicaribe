import React, { useState } from "react";

const RegistroProfesor = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleEspecialidadChange = (e) => {
    setEspecialidad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para registrar al profesor

    setNombre("");
    setApellido("");
    setEspecialidad("");
  };

  return (
    <div className="registro-profesor">
      <h2>Registro de Profesor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={handleApellidoChange}
          />
        </div>
        <div>
          <label htmlFor="especialidad">Especialidad:</label>
          <input
            type="text"
            id="especialidad"
            value={especialidad}
            onChange={handleEspecialidadChange}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroProfesor;
