const { Router } = require("express");
const router = Router();

const {
  getMeasurements,
  getMeasurement,
  createMeasurement,
  updateMeasurement,
  deleteMeasurement,
} = require("../controllers/measurements.controllers");

router.route("/").get(getMeasurements).post(createMeasurement);

router.route("/:id").get(getMeasurement).put(updateMeasurement).delete(deleteMeasurement);

module.exports = router;
// const { Router } =require("express");
// const router = Router();

// //importar el controlador
// const {
//   getMeasurements,
//   createMeasurement,
//   getMeasurement,
//   deleteMeasurement,
//   updateMeasurement,
// } = require("../controllers/measurements.controller.js");
// //Obtener todos los measurements
// router.get("/measurements", getMeasurements);
// //Crear un nuevo measurement
// router.post("/measurements", createMeasurement);
// //Obtener un measurement
// router.get("/measurements/:id", getMeasurement);
// //Eliminar un measurement
// router.delete("/measurements/:id", deleteMeasurement);
// //Actualizar un measurement
// router.put("/measurements/:id", updateMeasurement);

// module.exports = router;
// const express = require("express");
// const Measurement = require("../models/Measurement");
// const router = express.Router();

// //Consultar todos los datos
// router.get("/", async (req, res) => {
//   const measurements = await Measurement.find();
//   res.json(measurements);
// });
// // Consultar un dato
// router.get("/:id", async (req, res) => {
//   const measurement = await Measurement.findById(req.params.id);
//   res.json(measurement);
// });
// // Guardar todos un objeto
// router.post("/", async (req, res) => {
//   const {
//     height,
//     weight,
//     classificationbyweight,
//     bodymassindex,
//     bodyfatindex,
//     musclemassindex,
//     BoneMassIndex,
//     ResidualMassIndex,
//     user,
//   } = req.body;
//   const measurement = new Measurement({
//     height,
//     weight,
//     classificationbyweight,
//     bodymassindex,
//     bodyfatindex,
//     musclemassindex,
//     BoneMassIndex,
//     ResidualMassIndex,
//     user,
//   });
//   await measurement.save();
//   res.json({ status: "Measurement Saved" });
// });
// // Actualizar
// router.put("/:id", async (req, res) => {
//   const {
//     height,
//     weight,
//     classificationbyweight,
//     bodymassindex,
//     bodyfatindex,
//     musclemassindex,
//     BoneMassIndex,
//     ResidualMassIndex,
//     user,
//   } = req.body;
//   const newMeasurement = {
//     height,
//     weight,
//     classificationbyweight,
//     bodymassindex,
//     bodyfatindex,
//     musclemassindex,
//     BoneMassIndex,
//     ResidualMassIndex,
//     user,
//   };
//   await Measurement.findByIdAndUpdate(req.params.id, newMeasurement);
//   res.json({ status: "Measurement Updated" });
// });
// //Eliminar
// router.delete("/:id", async (req, res) => {
//   await Measurement.findByIdAndRemove(req.params.id);
//   res.json({ status: "Measurement Deleted" });
// });
// module.exports = router;
