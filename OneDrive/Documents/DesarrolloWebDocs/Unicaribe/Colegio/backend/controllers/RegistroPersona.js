// Importar el modelo de Sequelize
const { Sequelize, Model, DataTypes } = require("sequelize");

// Crear una instancia de Sequelize con la configuración de la base de datos
const sequelize = new Sequelize("colegio_unicaribe", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

// Definir el modelo RegistroPersona
const RegistroPersona = sequelize.define("registro_persona", {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  rol: DataTypes.STRING,
});

// Controlador de RegistroPersona
const obtenerRegistroPersonas = async (req, res) => {
  try {
    const registroPersonas = await RegistroPersona.findAll();
    res.json(registroPersonas);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los registros de personas." });
  }
};

const crearRegistroPersona = async (req, res) => {
  const { nombre, apellido, rol } = req.body;
  try {
    const registroPersona = await RegistroPersona.create({
      nombre,
      apellido,
      rol,
    });
    res.status(201).json(registroPersona);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el registro de persona." });
  }
};

module.exports = {
  RegistroPersona,
  obtenerRegistroPersonas,
  crearRegistroPersona,
};
