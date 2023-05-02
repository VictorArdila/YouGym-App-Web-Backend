const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CashRegisterSchema = new Schema({
    id: { type: String, required: true, trim: true, unique: true },
    openingdate: { type: Date, required: true, trim: true },
    openinghour: { type: Date, required: true },
    closingdate: { type: Date, required: true, trim: true },
    closinghour: { type: Date, required: true },
    status: { type: String, required: true },
    startingamount: { type: Number, required: true },
    endingamount: { type: Number, required: true },
    saleoftheday: { type: Number, required: true },
    user: { type: String, required: true, trim: true, unique: true, ref: "User" },
},{
    timestamps: true
})

module.exports=model("CashRegisters", CashRegisterSchema);