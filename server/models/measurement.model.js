const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const MeasurementSchema = new Schema({
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    classificationbyweight: { type: String, required: true },
    bodymassindex: { type: Number, required: true },
    bodyfatindex: { type: Number, required: true },
    musclemassindex: { type: Number, required: true },
    BoneMassIndex: { type: Number, required: true },
    ResidualMassIndex: { type: Number, required: true },
    user: { type: String, required: true, trim: true, unique: true},
},{
    timestamps: true
    }
)

module.exports=model("Measurements", MeasurementSchema);