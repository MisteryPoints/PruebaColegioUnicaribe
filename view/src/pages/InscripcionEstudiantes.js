import React, { useState } from "react";

const InscripcionEstudiantes = () => {
  const [estudiante, setEstudiante] = useState({
    nombre: "",
    edad: "",
    grado: "",
  });

  const handleInputChange = (e) => {
    setEstudiante({
      ...estudiante,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para guardar los datos del estudiante

    setEstudiante({
      nombre: "",
      edad: "",
      grado: "",
    });
  };

  return (
    <div className="inscripcion-estudiantes">
      <h1>Inscripción de Estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={estudiante.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={estudiante.edad}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="grado">Grado:</label>
          <input
            type="text"
            id="grado"
            name="grado"
            value={estudiante.grado}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Inscribir</button>
      </form>
    </div>
  );
};

export default InscripcionEstudiantes;
