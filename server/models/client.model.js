const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const ClientSchema = new Schema({
    code: { type: String, required: true, trim: true, unique: true },
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
    //datos indice
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
},{
    timestamps: true
})

module.exports=model("Clients", ClientSchema);