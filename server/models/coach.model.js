const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CoachSchema = new Schema({
    code: { type: String, required: true, trim: true, unique: true },
    dni: { type: String, required: true, trim: true, unique: true },
    dnitype: { type: String, required: true},
    name: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trin: true },
    dateofbirth: { type: Date, required: true, trim: true },
    gender: { type: String, required: true },
    address: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    //datos pago de salario
    overtimeworkhours: { type: Number, required: true },
    workdays: { type: Number, required: true },
    monthsOfContract: { type: Number, required: true },
    typeofcontract: { type: String, required: true },
    wage: { type: Number, required: true },
},{
    timestamps: true
})

module.exports = model("Coaches", CoachSchema);