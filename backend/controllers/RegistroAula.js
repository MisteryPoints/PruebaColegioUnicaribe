const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("colegio_unicaribe", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const RegistroAula = sequelize.define("registro_aula", {
  aula: DataTypes.STRING,
  descripcion: DataTypes.STRING,
});

const obtenerRegistroAulas = async (req, res) => {
  try {
    const registroAulas = await RegistroAula.findAll();
    res.json(registroAulas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los registros de aulas." });
  }
};

const crearRegistroAula = async (req, res) => {
  const { aula, descripcion } = req.body;
  try {
    const registroAula = await RegistroAula.create({ aula, descripcion });
    res.status(201).json(registroAula);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el registro de aula." });
  }
};

module.exports = { RegistroAula, obtenerRegistroAulas, crearRegistroAula };
