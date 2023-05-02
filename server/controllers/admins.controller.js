const admincontroller = {};
const Admin = require("../models/admin.model");

//obtener todos los administradores
admincontroller.getAdmins = async (req, res) => {
  const admins = await Admin.find();
  res.json(admins).status({
    status: "Admins list",
  });
};
//crear un administrador
admincontroller.createAdmin = async (req, res) => {
  const {
    dni,
    dnitype,
    name,
    lastname,
    dateofbirth,
    gender,
    address,
    phone,
    email,
    password,
  } = req.body;
  const newAdmin = new Admin({
    dni,
    dnitype,
    name,
    lastname,
    dateofbirth,
    gender,
    address,
    phone,
    email,
    password,
  });
  await newAdmin.save();
  res.json(newAdmin).status({status: "Admin Saved",});
};
//obtener un administrador
admincontroller.getAdmin = async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  res.json(admin).status({
    status: "Admin Found",
  });
};
//actualizar un administrador
admincontroller.updateAdmin = async (req, res) => {
  const {
    dni,
    dnitype,
    name,
    lastname,
    dateofbirth,
    gender,
    address,
    phone,
    email,
    password,
  } = req.body;
  const adminUpdate = await Admin.findOneAndUpdate({_id:req.params.id}, {
    dni,
    dnitype,
    name,
    lastname,
    dateofbirth,
    gender,
    address,
    phone,
    email,
    password,
  });
  res.json(adminUpdate).status({
    status: "Admin Updated",
  });
};
//eliminar un administrador
admincontroller.deleteAdmin = async (req, res) => {
  const adminDelete = await Admin.findByIdAndDelete(req.params.id);
  res.json(adminDelete).status({
    status: "Admin Deleted",
  });
};
module.exports = admincontroller;
