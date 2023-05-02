const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const { mongoose } = require("./database");
const app = express();

//settings
app.set("port", process.env.PORT || 3000);
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/api/users/users", require("./routes/user.routes"));
app.use("/api/cashregister", require("./routes/cashregister.routes"));
app.use("/api/users/coach", require("./routes/coach.routes"));
app.use("/api/users/admin", require("./routes/admin.routes.js"));
app.use("/api/users/client", require("./routes/client.routes"));
app.use("/api/users/client/indexs", require("./routes/measurement.routes"));

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status,
      message: err.message,
    },
  });
});
//static files
app.use(express.static(path.join(__dirname, "../public")));
// //start server
// app.listen(app.get("port"), () => {
//   console.log(`Server on port ${app.get("port")}`);
// });
module.exports = app;
