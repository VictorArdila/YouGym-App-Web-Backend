const cashregistercontroller = {};
const CashRegister = require("../models/cashregister.model");

//obtener todos las cajas registradoras
cashregistercontroller.getCashregisters = async (req, res) => {
  const cashregister = await CashRegister.find();
  res.json(cashregister).status({
    status: "Cash Register list",
  });
};
//crear una caja registradora
cashregistercontroller.createCashregister = async (req, res) => {
  const {
    id,
    openingdate,
    openinghour,
    closingdate,
    closinghour,
    status,
    startingamount,
    endingamount,
    saleoftheday,
    user,
  } = req.body;
  const newCashRegister = new CashRegister({
    id,
    openingdate,
    openinghour,
    closingdate,
    closinghour,
    status,
    startingamount,
    endingamount,
    saleoftheday,
    user,
  });
  await newCashRegister.save();
  res.json(newCashRegister).status({ status: "Cash Register Saved" });
};
//obtener una caja registradora
cashregistercontroller.getCashregister = async (req, res) => {
  const cashregister = await CashRegister.findById(req.params.id);
  res.json(cashregister).status({
    status: "Cash Register Found",
  });
};
//actualizar una caja registradora
cashregistercontroller.updateCashregister = async (req, res) => {
  const {
    id,
    openingdate,
    openinghour,
    closingdate,
    closinghour,
    status,
    startingamount,
    endingamount,
    saleoftheday,
    user,
  } = req.body;
  const cashregisterUpdate = await CashRegister.findOneAndUpdate({_id:req.params.id}, {
    id,
    openingdate,
    openinghour,
    closingdate,
    closinghour,
    status,
    startingamount,
    endingamount,
    saleoftheday,
    user,
  });
  res.json(cashregisterUpdate).status({
    status: "Cash Register Updated",
  });
};
//eliminar una caja registradora
cashregistercontroller.deleteCashregister = async (req, res) => {
  const cashregisterDelete = await CashRegister.findByIdAndDelete(req.params.id);
  res.json(cashregisterDelete).status({
    status: "Cash Register Deleted",
  });
};
module.exports = cashregistercontroller;
