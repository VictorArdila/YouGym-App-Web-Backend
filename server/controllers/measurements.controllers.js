const measurementcontroller = {};
const Measurement = require("../models/Measurement.model.js");
measurementcontroller.getMeasurements=(req, res) => {
  res.json({
    status: "Measurements list",
  });
}
measurementcontroller.createMeasurement=(req, res) => {
    res.json({
        status: "Measurement Saved",
    });
}
measurementcontroller.getMeasurement=(req, res) => {
    res.json({
        status: "Measurement Found",
    });
}
measurementcontroller.updateMeasurement=(req, res) => {
    res.json({
        status: "Measurement Updated",
    });
}
measurementcontroller.deleteMeasurement=(req, res) => {
    res.json({
        status: "Measurement Deleted",
    });
}
module.exports = measurementcontroller;
// const Measurament = require("../models/Measurament.js");

// //Obtener todos los measurements
//  const getMeasurements = async (req, res, next) => {
//   try {
//     const measurements = await Measurement.find();
//     res.json(measurements);
//   } catch (error) {
//     next(error);
//   }
// };
// //Crear un nuevo measurement
//  const createMeasurement = async (req, res, next) => {
//   try {
//     const {
//       height,
//       weight,
//       classificationbyweight,
//       bodymassindex,
//       bodyfatindex,
//       musclemassindex,
//       BoneMassIndex,
//       ResidualMassIndex,
//       user,
//     } = req.body;
//     const newMeasurement = new Measurement({
//       height,
//       weight,
//       classificationbyweight,
//       bodymassindex,
//       bodyfatindex,
//       musclemassindex,
//       BoneMassIndex,
//       ResidualMassIndex,
//       user,
//     });
//     const savedMeasurement = await newMeasurement.save();
//     return res.json(savedMeasurement);
//   } catch (error) {
//     next(error);
//   }
// };
// //Obtener un measurement
//  const getMeasurement = async (req, res, next) => {
//   try {
//     const measurement = await Measurement.findById(req.params.id);

//     if (!measurement) {
//       const error = new Error("Measurement does not exists");
//       error.status = 404;
//       throw error;
//     }

//     res.json(measurement);
//   } catch (error) {
//     next(error);
//   }
// };
// //Eliminar un measurement
//  const deleteMeasurement = async (req, res, next) => {
//   try {
//     const deletedMeasurement = await Measurement.findByIdAndDelete(
//       req.params.id
//     );

//     if (!deletedMeasurement) {
//       const error = new Error("Measurement does not exists");
//       error.status = 404;
//       throw error;
//     }

//     return res.sendStatus(204);
//   } catch (error) {
//     next(error);
//   }
// };
// //Actualizar un measurement
//  const updateMeasurement = async (req, res, next) => {
//   try {
//     const {
//       height,
//       weight,
//       classificationbyweight,
//       bodymassindex,
//       bodyfatindex,
//       musclemassindex,
//       BoneMassIndex,
//       ResidualMassIndex,
//       user,
//     } = req.body;
//     const measurementUpdated = await Measurement.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           height,
//           weight,
//           classificationbyweight,
//           bodymassindex,
//           bodyfatindex,
//           musclemassindex,
//           BoneMassIndex,
//           ResidualMassIndex,
//           user,
//         },
//       },
//       {
//         new: true,
//       }
//     );

//     return res.json(measurementUpdated);
//   } catch (error) {
//     next(error);
//   }
// };
