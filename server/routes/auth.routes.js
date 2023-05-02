const express = require("express");
const router = express.Router();
const { profile, signin, signup } = require("../controllers/auth.controller.js");
const { schemaValidator } = require("../middlewares/schemaValidator.js");
const { signinSchema, signupSchema } = require("../schemas/auth.schema.js");
const { authRequired } = ("../middlewares/validateToken.js");

router.post("/signup", schemaValidator(signupSchema), signup);

router.post("/signin", schemaValidator(signinSchema), signin);

router.get("/profile", authRequired, profile);

module.exports = router;