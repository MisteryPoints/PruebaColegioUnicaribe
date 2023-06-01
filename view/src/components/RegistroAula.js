import React, { useState } from "react";

const RegistroAula = () => {
  const [aula, setAula] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleAulaChange = (e) => {
    setAula(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para registrar el aula

    setAula("");
    setDescripcion("");
  };

  return (
    <div className="registro-aula">
      <h2>Registro de Aula</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="aula">Aula:</label>
          <input
            type="text"
            id="aula"
            value={aula}
            onChange={handleAulaChange}
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

export default RegistroAula;
