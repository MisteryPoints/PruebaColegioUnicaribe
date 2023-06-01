import React, { useState } from "react";

const RegistroAsignatura = () => {
  const [materia, setMateria] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleMateriaChange = (e) => {
    setMateria(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para registrar la asignatura

    setMateria("");
    setDescripcion("");
  };

  return (
    <div className="registro-asignatura">
      <h2>Registro de Asignatura</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="materia">Materia:</label>
          <input
            type="text"
            id="materia"
            value={materia}
            onChange={handleMateriaChange}
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={handleDescripcionChange}
          ></textarea>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroAsignatura;
