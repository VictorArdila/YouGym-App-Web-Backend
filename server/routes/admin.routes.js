const { Router } = require("express");
const router = Router();

const {
  getAdmins,
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/admins.controller");

router.route("/").get(getAdmins).post(createAdmin);

router.route("/:id").get(getAdmin).put(updateAdmin).delete(deleteAdmin);

module.exports = router;
// const express = require("express");
// const Admin = require("../models/Admin");
// const router = express.Router();

// //Consultar todos los datos
// router.get("/", async (req, res) => {
//   const admins = await Admin.find();
//   res.json(admins);
// });
// // Consultar un dato
// router.get("/:id", async (req, res) => {
//   const admin = await Admin.findById(req.params.id);
//   res.json(admin);
// });
// // Guardar todos un objeto
// router.post("/", async (req, res) => {
//   const {
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
//   } = req.body;
//   const admin = new Admin({
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
//   });
//   await admin.save();
//   res.json({ status: "Admin Saved" });
// });
// // Actualizar
// router.put("/:id", async (req, res) => {
//   const {
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
//   } = req.body;
//   const newAdmin = {
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
//   };
//   await Admin.findByIdAndUpdate(req.params.id, newAdmin);
//   res.json({ status: "Admin Updated" });
// });
// //Eliminar
// router.delete("/:id", async (req, res) => {
//   await Admin.findByIdAndRemove(req.params.id);
//   res.json({ status: "Admin Deleted" });
// });
// module.exports = router;
