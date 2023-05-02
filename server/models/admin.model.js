const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AdminSchema = new Schema({
    dni: { type: String, required: true, trim: true, unique: true },
    dnitype: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    dateofbirth: { type: Date, required: true, trim: true },
    gender: { type: String, required: true },
    address: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
},{
    timestamps: true
})

module.exports=model("Admins", AdminSchema);