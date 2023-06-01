const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("colegio_unicaribe", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
const RegistroProfesor = sequelize.define("registro_profesor", {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  especialidad: DataTypes.STRING,
});

const obtenerRegistroProfesores = async (req, res) => {
  try {
    const registroProfesores = await RegistroProfesor.findAll();
    res.json(registroProfesores);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los registros de profesores." });
  }
};

const crearRegistroProfesor = async (req, res) => {
  const { nombre, apellido, especialidad } = req.body;
  try {
    const registroProfesor = await RegistroProfesor.create({
      nombre,
      apellido,
      especialidad,
    });
    res.status(201).json(registroProfesor);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el registro de profesor." });
  }
};

module.exports = {
  RegistroProfesor,
  obtenerRegistroProfesores,
  crearRegistroProfesor,
};
