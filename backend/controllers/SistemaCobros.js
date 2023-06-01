const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("colegio_unicaribe", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const SistemaCobros = sequelize.define("sistema_cobros", {
  mes: DataTypes.STRING,
  cuotas: DataTypes.INTEGER,
  responsable_pago: DataTypes.STRING,
});

const obtenerSistemaCobros = async (req, res) => {
  try {
    const sistemaCobros = await SistemaCobros.findAll();
    res.json(sistemaCobros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el sistema de cobros." });
  }
};

const crearSistemaCobros = async (req, res) => {
  const { mes, cuotas, responsable_pago } = req.body;
  try {
    const sistemaCobros = await SistemaCobros.create({
      mes,
      cuotas,
      responsable_pago,
    });
    res.status(201).json(sistemaCobros);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el sistema de cobros." });
  }
};

module.exports = { SistemaCobros, obtenerSistemaCobros, crearSistemaCobros };
