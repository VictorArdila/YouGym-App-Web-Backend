const { Router } = require("express");
const router = Router();

const {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
} = require("../controllers/clients.controller");

router.route("/").get(getClients).post(createClient);

router.route("/:id").get(getClient).put(updateClient).delete(deleteClient);

module.exports = router;
// const { Router } =require("express");
// const router = Router();

// //importar el controlador
// const {
//   getClients,
//   createClient,
//   getClient,
//   deleteClient,
//   updateClient,
// } = require("../controllers/clients.controller.js");
// //Obtener todos los clients
// router.get("/clients", getClients);
// //Crear un nuevo client
// router.post("/clients", createClient);
// //Obtener un client
// router.get("/clients/:id", getClient);
// //Eliminar un client
// router.delete("/clients/:id", deleteClient);
// //Actualizar un client
// router.put("/clients/:id", updateClient);

// module.exports = router;
// const express = require("express");
// const Client = require("../models/Client");
// const router = express.Router();

// //Consultar todos los datos
// router.get("/", async (req, res) => {
//   const clients = await Client.find();
//   res.json(clients);
// });
// // Consultar un dato
// router.get("/:id", async (req, res) => {
//   const client = await Client.findById(req.params.id);
//   res.json(client);
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
//     height,
//     weight,
//   } = req.body;
//   const client = new Client({
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
//     height,
//     weight,
//   });
//   await client.save();
//   res.json({ status: "Client Saved" });
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
//     height,
//     weight,
//   } = req.body;
//   const newClient = {
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
//     height,
//     weight,
//   };
//   await Client.findByIdAndUpdate(req.params.id, newClient);
//   res.json({ status: "Client Updated" });
// });
// //Eliminar
// router.delete("/:id", async (req, res) => {
//   await Client.findByIdAndRemove(req.params.id);
//   res.json({ status: "Client Deleted" });
// });
// module.exports = router;
