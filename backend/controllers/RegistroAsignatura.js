const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("colegio_unicaribe", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const RegistroAsignatura = sequelize.define("registro_asignatura", {
  materia: DataTypes.STRING,
  descripcion: DataTypes.STRING,
});

const obtenerRegistroAsignaturas = async (req, res) => {
  try {
    const registroAsignaturas = await RegistroAsignatura.findAll();
    res.json(registroAsignaturas);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los registros de asignaturas." });
  }
};

const crearRegistroAsignatura = async (req, res) => {
  const { materia, descripcion } = req.body;
  try {
    const registroAsignatura = await RegistroAsignatura.create({
      materia,
      descripcion,
    });
    res.status(201).json(registroAsignatura);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear el registro de asignatura." });
  }
};

module.exports = {
  RegistroAsignatura,
  obtenerRegistroAsignaturas,
  crearRegistroAsignatura,
};
