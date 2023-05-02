const mongoose = require("mongoose");

console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI? process.env.MONGODB_URI : MONGODB_URI_ASSISTAND;

mongoose
  .connect(URI)
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.error(error));
module.exports = mongoose;
