const express = require("express")
// importamos por medio de desestructuracion las funciones del controlador
const { getUsers, getUser, createUsers, updateUser } = require("../controllers/userController")
const { createUserValidator, getOneUserValidator } = require("../validators/userValidators")

const router = express.Router()

// asignamos un controlador a la ruta
router.get("/", getUsers)
router.get("/:id", getOneUserValidator, getUser)
router.post("/", createUserValidator, createUsers)
router.put("/:id", getOneUserValidator, createUserValidator, updateUser)


module.exports = router