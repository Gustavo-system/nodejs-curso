const express = require("express")
const { login } = require("../controllers/authController")
const { createUsers } = require("../controllers/userController")
const { createUserValidator } = require("../validators/userValidators")
const { loginValidator } = require("../validators/authValidators")
const router = express.Router()


router.post("/login", loginValidator, login)
router.post("/registro", createUserValidator, createUsers)

module.exports = router