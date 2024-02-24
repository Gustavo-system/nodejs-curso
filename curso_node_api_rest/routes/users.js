const express = require("express")
// importamos por medio de desestructuracion las funciones del controlador
const { getUsers, createUsers } = require("../controllers/userController")
const { createUserValidator } = require("../validators/userValidators")

const router = express.Router()

// asignamos un controlador a la ruta
router.get("/", getUsers)
router.post("/", createUserValidator, createUsers)


module.exports = router