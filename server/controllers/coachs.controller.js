const coachcontroller = {};
const Coach = require("../models/Coach.model.js");

coachcontroller.getCoachs=(req, res) => {
  res.json({
    status: "Coachs list",
  });
}
coachcontroller.createCoach=(req, res) => {
    res.json({
        status: "Coach Saved",
    });
}
coachcontroller.getCoach=(req, res) => {
    res.json({
        status: "Coach Found",
    });
}
coachcontroller.updateCoach=(req, res) => {
    res.json({
        status: "Coach Updated",
    });
}
coachcontroller.deleteCoach=(req, res) => {
    res.json({
        status: "Coach Deleted",
    });
}
module.exports = coachcontroller;
// const Coach = require("../models/Coach.js");

// //Obtener todos los coachs
//  const getCoachs = async (req, res, next) => {
//   try {
//     const coachs = await Coach.find();
//     res.json(coachs);
//   } catch (error) {
//     next(error);
//   }
// };
// //Crear un nuevo coach
//  const createCoach = async (req, res, next) => {
//   try {
//     const {
//       dni,
//       dnitype,
//       name,
//       lastname,
//       dateofbirth,
//       gender,
//       address,
//       phone,
//       email,
//       password,
//     } = req.body;
//     const newCoach = new Coach({
//       dni,
//       dnitype,
//       name,
//       lastname,
//       dateofbirth,
//       gender,
//       address,
//       phone,
//       email,
//       password,
//     });
//     const savedCoach = await newCoach.save();
//     return res.json(savedCoach);
//   } catch (error) {
//     next(error);
//   }
// };
// //Obtener un coach
//  const getCoach = async (req, res, next) => {
//   try {
//     const coach = await Coach.findById(req.params.id);

//     if (!coach) {
//       const error = new Error("Coach does not exists");
//       error.status = 404;
//       throw error;
//     }

//     res.json(coach);
//   } catch (error) {
//     next(error);
//   }
// };
// //Eliminar un coach
//  const deleteCoach = async (req, res, next) => {
//   try {
//     const deletedCoach = await Coach.findByIdAndDelete(req.params.id);

//     if (!deletedCoach) {
//       const error = new Error("Coach does not exists");
//       error.status = 404;
//       throw error;
//     }

//     return res.sendStatus(204);
//   } catch (error) {
//     next(error);
//   }
// };
// //Actualizar un coach
//  const updateCoach = async (req, res, next) => {
//   try {
//     const {
//       dni,
//       dnitype,
//       name,
//       lastname,
//       dateofbirth,
//       gender,
//       address,
//       phone,
//       email,
//       password,
//     } = req.body;
//     const coachUpdated = await Coach.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           dni,
//           dnitype,
//           name,
//           lastname,
//           dateofbirth,
//           gender,
//           address,
//           phone,
//           email,
//           password,
//         },
//       },
//       {
//         new: true,
//       }
//     );

//     return res.json(coachUpdated);
//   } catch (error) {
//     next(error);
//   }
// };
