import React, { useState } from "react";

const RegistroPersona = () => {
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleRolChange = (e) => {
    setRol(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para registrar la persona

    setNombre("");
    setRol("");
  };

  return (
    <div className="registro-persona">
      <h2>Registro de Persona</h2>
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
          <label htmlFor="rol">Rol:</label>
          <select id="rol" value={rol} onChange={handleRolChange}>
            <option value="">Seleccionar Rol</option>
            <option value="padre">Padre</option>
            <option value="estudiante">Estudiante</option>
            <option value="profesor">Profesor</option>
          </select>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroPersona;
