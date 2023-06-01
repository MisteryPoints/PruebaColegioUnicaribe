const express = require("express");
const { Sequelize } = require("sequelize");
const RegistroPersona = require("./controllers/RegistroPersona");
const RegistroAula = require("./controllers/RegistroAula");
const RegistroAsignatura = require("./controllers/RegistroAsignatura");
const RegistroProfesor = require("./controllers/RegistroProfesor");
const SistemaCobros = require("./controllers/SistemaCobros");
const InscripcionEstudiantes = require("./controllers/InscripcionEstudiantes");

// Crear una instancia de Express
const app = express();
app.use(express.json());

const sequelize = new Sequelize("colegio_unicaribe", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

// Definir los modelos y sus relaciones
RegistroPersona.RegistroPersona.init(sequelize);
RegistroAula.RegistroAula.init(sequelize);
RegistroAsignatura.RegistroAsignatura.init(sequelize);
RegistroProfesor.RegistroProfesor.init(sequelize);
SistemaCobros.SistemaCobros.init(sequelize);
InscripcionEstudiantes.InscripcionEstudiantes.init(sequelize);

// Sincronizar los modelos con la base de datos (crear las tablas)
sequelize
  .sync()
  .then(() => {
    console.log("Base de datos creada correctamente.");
  })
  .catch((error) => {
    console.error("Error al crear la base de datos:", error);
  });

// Verificar la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión establecida correctamente.");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

// Rutas y controladores
app.get("/registro_personas", RegistroPersona.obtenerRegistroPersonas);
app.post("/registro_personas", RegistroPersona.crearRegistroPersona);

app.get("/registro_aulas", RegistroAula.obtenerRegistroAulas);
app.post("/registro_aulas", RegistroAula.crearRegistroAula);

app.get("/registro_asignaturas", RegistroAsignatura.obtenerRegistroAsignaturas);
app.post("/registro_asignaturas", RegistroAsignatura.crearRegistroAsignatura);

app.get("/registro_profesores", RegistroProfesor.obtenerRegistroProfesores);
app.post("/registro_profesores", RegistroProfesor.crearRegistroProfesor);

app.get("/sistema_cobros", SistemaCobros.obtenerSistemaCobros);
app.post("/sistema_cobros", SistemaCobros.crearSistemaCobros);

app.get(
  "/inscripcion_estudiantes",
  InscripcionEstudiantes.obtenerInscripcionEstudiantes
);
app.post(
  "/inscripcion_estudiantes",
  InscripcionEstudiantes.crearInscripcionEstudiante
);

// Puerto en el que se ejecutará el servidor
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
