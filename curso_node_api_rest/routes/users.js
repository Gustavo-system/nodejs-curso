const express = require("express")
// importamos por medio de desestructuracion las funciones del controlador
const { getUsers, getUser, createUsers, updateUser } = require("../controllers/userController")
const { createUserValidator, getOneUserValidator } = require("../validators/userValidators")
const { validateTokenExist, validateAdmiRol } = require("../middlewares/middleware")

const router = express.Router()

// asignamos un controlador a la ruta
router.get("/", validateTokenExist, validateAdmiRol(["admin"]), getUsers)
router.get("/:id", getOneUserValidator, getUser)
router.post("/", validateTokenExist, createUserValidator, createUsers)
router.put("/:id", getOneUserValidator, createUserValidator, updateUser)


module.exports = router