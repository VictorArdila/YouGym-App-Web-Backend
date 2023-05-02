const { Router } = require("express");
const router = Router();

const {
  getCoachs,
  getCoach,
  createCoach,
  updateCoach,
  deleteCoach,
} = require("../controllers/coachs.controller");

router.route("/").get(getCoachs).post(createCoach);

router.route("/:id").get(getCoach).put(updateCoach).delete(deleteCoach);

module.exports = router;
// const { Router } =require("express");
// const router = Router();

// //importar el controlador
// const {
//   getCoachs,
//   createCoach,
//   getCoach,
//   deleteCoach,
//   updateCoach,
// } = require("../controllers/coachs.controller.js");
// //Obtener todos los coachs
// router.get("/coachs", getCoachs);
// //Crear un nuevo coach
// router.post("/coachs", createCoach);
// //Obtener un coach
// router.get("/coachs/:id", getCoach);
// //Eliminar un coach
// router.delete("/coachs/:id", deleteCoach);
// //Actualizar un coach
// router.put("/coachs/:id", updateCoach);

// module.exports = router;
// const express = require("express");
// const Coach = require("../models/Coach");
// const router = express.Router();

// //Consultar todos los datos
// router.get("/", async (req, res) => {
//   const coaches = await Coach.find();
//   res.json(coaches);
// });
// // Consultar un dato
// router.get("/:id", async (req, res) => {
//   const coach = await Coach.findById(req.params.id);
//   res.json(coach);
// });
// // Guardar todos un objeto
// router.post("/", async (req, res) => {
//   const {
//     code,
//     dni,
//     dnitype,
//     name,
//     lastname,
//     dateofbirth,
//     gender,
//     address,
//     phone,
//     email,
//     password,
//     overtimeworkhours,
//     workdays,
//     monthsOfContract,
//     typeofcontract,
//     wage,
//   } = req.body;
//   const coach = new Coach({
//     code,
//     dni,
//     dnitype,
//     name,
//     lastname,
//     dateofbirth,
//     gender,
//     address,
//     phone,
//     email,
//     password,
//     overtimeworkhours,
//     workdays,
//     monthsOfContract,
//     typeofcontract,
//     wage,
//   });
//   await coach.save();
//   res.json({ status: "Coach Saved" });
// });
// // Actualizar
// router.put("/:id", async (req, res) => {
//   const {
//     code,
//     dni,
//     dnitype,
//     name,
//     lastname,
//     dateofbirth,
//     gender,
//     address,
//     phone,
//     email,
//     password,
//     overtimeworkhours,
//     workdays,
//     monthsOfContract,
//     typeofcontract,
//     wage,
//   } = req.body;
//   const newCoach = {
//     code,
//     dni,
//     dnitype,
//     name,
//     lastname,
//     dateofbirth,
//     gender,
//     address,
//     phone,
//     email,
//     password,
//     overtimeworkhours,
//     workdays,
//     monthsOfContract,
//     typeofcontract,
//     wage,
//   };
//   await Coach.findByIdAndUpdate(req.params.id, newCoach);
//   res.json({ status: "Coach Updated" });
// });
// //Eliminar
// router.delete("/:id", async (req, res) => {
//   await Coach.findByIdAndRemove(req.params.id);
//   res.json({ status: "Coach Deleted" });
// });
// module.exports = router;
