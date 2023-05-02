const clientcontroller = {};
const Client = require("../models/Client.model.js");

clientcontroller.getClients=(req, res) => {
  res.json({
    status: "Clients list",
  });
}
clientcontroller.createClient=(req, res) => {
    res.json({
        status: "Client Saved",
    });
}
clientcontroller.getClient=(req, res) => {
    res.json({
        status: "Client Found",
    });
}
clientcontroller.updateClient=(req, res) => {
    res.json({
        status: "Client Updated",
    });
}
clientcontroller.deleteClient=(req, res) => {
    res.json({
        status: "Client Deleted",
    });
}
module.exports = clientcontroller;
// const Client = require("../models/Clienfindt.js");

// //Obtener todos los clients
//  const getClients = async (req, res, next) => {
//   try {
//     const clients = await Client.find();
//     res.json(clients);
//   } catch (error) {
//     next(error);
//   }
// };
// //Crear un nuevo client
//  const createClient = async (req, res, next) => {
//   try {
//     const {
//       code,
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
//       height,
//       weight,
//     } = req.body;
//     const newClient = new Client({
//       code,
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
//       height,
//       weight,
//     });
//     const savedClient = await newClient.save();
//     return res.json(savedClient);
//   } catch (error) {
//     next(error);
//   }
// };
// //Obtener un client
//  const getClient = async (req, res, next) => {
//   try {
//     const client = await Client.findById(req.params.id);

//     if (!client) {
//       const error = new Error("Client does not exists");
//       error.status = 404;
//       throw error;
//     }

//     res.json(client);
//   } catch (error) {
//     next(error);
//   }
// };
// //Eliminar un client
//  const deleteClient = async (req, res, next) => {
//   try {
//     const deletedClient = await Client.findByIdAndDelete(req.params.id);

//     if (!deletedClient) {
//       const error = new Error("Client does not exists");
//       error.status = 404;
//       throw error;
//     }

//     return res.sendStatus(204);
//   } catch (error) {
//     next(error);
//   }
// };
// //Actualizar un client
//  const updateClient = async (req, res, next) => {
//   try {
//     const {
//       code,
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
//       height,
//       weight,
//     } = req.body;
//     const clientUpdated = await Client.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           code,
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
//           height,
//           weight,
//         },
//       },
//       {
//         new: true,
//       }
//     );

//     return res.json(clientUpdated);
//   } catch (error) {
//     next(error);
//   }
// };
