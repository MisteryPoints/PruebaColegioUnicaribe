const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("colegio_unicaribe", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const InscripcionEstudiantes = sequelize.define("inscripcion_estudiantes", {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  edad: DataTypes.INTEGER,
  nivel: DataTypes.STRING,
});

const obtenerInscripcionEstudiantes = async (req, res) => {
  try {
    const inscripcionEstudiantes = await InscripcionEstudiantes.findAll();
    res.json(inscripcionEstudiantes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener las inscripciones de estudiantes." });
  }
};

const crearInscripcionEstudiante = async (req, res) => {
  const { nombre, apellido, edad, nivel } = req.body;
  try {
    const inscripcionEstudiante = await InscripcionEstudiantes.create({
      nombre,
      apellido,
      edad,
      nivel,
    });
    res.status(201).json(inscripcionEstudiante);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear la inscripción de estudiante." });
  }
};

module.exports = {
  InscripcionEstudiantes,
  obtenerInscripcionEstudiantes,
  crearInscripcionEstudiante,
};
