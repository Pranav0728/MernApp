const express = require("express");
const router = express.Router();
const contoll = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middleware/validate-middleware")

router.route("/register").post( validate(signupSchema), contoll.register);
router.route("/login").post(contoll.login);

module.exports = router