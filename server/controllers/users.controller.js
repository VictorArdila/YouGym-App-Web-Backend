const usercontroller = {};
const User = require("../models/User.model.js");

usercontroller.getUsers=(req, res) => {
  res.json({
    status: "Users list",
  });
}
usercontroller.createUser=(req, res) => {
    res.json({
        status: "User Saved",
    });
}
usercontroller.getUser=(req, res) => {
    res.json({
        status: "User Found",
    });
}
usercontroller.updateUser=(req, res) => {
    res.json({
        status: "User Updated",
    });
}
usercontroller.deleteUser=(req, res) => {
    res.json({
        status: "User Deleted",
    });
}
module.exports = usercontroller;
// const User = require("../models/User.js");

//  const getUsers = async (req, res, next) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     next(error);
//   }
// };

//  const createUser = async (req, res, next) => {
//   try {
//     const { username } = req.body;

//     // Find an existing user
//     const userFound = await User.findOne({ username });
//     console.log(userFound);

//     // if user exists return a 409 http status code
//     if (userFound) {
//       const error = new Error("The user already exists");
//       error.status = 409;
//       throw error;
//     }

//     // Create a new User
//     const newUser = new User({ username });
//     const userSaved = await newUser.save();
//     return res.json(userSaved);
//   } catch (error) {
//     next(error);
//   }
// };

//  const deleteUser = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const userDeleted = await User.findByIdAndDelete(id);

//     if (!userDeleted) {
//       const error = new Error("User not found");
//       error.status = 404;
//       throw error;
//     }

//     return res.sendStatus(204);
//   } catch (error) {
//     next(error);
//   }
// };