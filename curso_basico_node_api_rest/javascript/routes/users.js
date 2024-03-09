const express = require("express")
// importamos por medio de desestructuracion las funciones del controlador
const { getUsers, getUser, createUsers, updateUser } = require("../controllers/userController")
const { createUserValidator, getOneUserValidator } = require("../validators/userValidators")
const { validateTokenExist, validateAdmiRol } = require("../middlewares/middleware")

const router = express.Router()

// asignamos un controlador a la ruta
router.get("/", validateTokenExist, validateAdmiRol(["admin"]), getUsers)
/**
 * @openapi
 * /users/{id}:
 *   get:
 *     tags:
 *       - user
 *     summary: "Consultar usuario por id"
 *     description: "Consultar la informacion de un usuario por medio de su id"
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: "Indicar el id del usuario que desee consultar"
 *         required: true
 *         schema:
 *           type: string
 *           example: "1"
 *     responses:
 *       '200':
 *         description: "Datos obtenidos con exito"
 *       '404':
 *         description: "El usuario no esta registrado"
 */
router.get("/:id", getOneUserValidator, getUser)
router.post("/", validateTokenExist, createUserValidator, createUsers)
router.put("/:id", getOneUserValidator, createUserValidator, updateUser)


module.exports = router