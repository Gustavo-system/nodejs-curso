const express = require("express")
const { login } = require("../controllers/authController")
const { createUsers } = require("../controllers/userController")
const { createUserValidator } = require("../validators/userValidators")
const { loginValidator } = require("../validators/authValidators")
const router = express.Router()

/**
 * @openapi
 * /auth/registro:
 *   post:
 *     tags:
 *       - auth
 *     summary: "Registar un usuario"
 *     description: "Esta ruta es para registrar a un usuario"
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/users"
 *     responses: 
 *       '201':
 *         description: "Registro exitoso"
 *       '403':
 *         description: "Erro por validacion de usuario"
 */
router.post("/registro", createUserValidator, createUsers)

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - auth
 *     summary: "Iniciar sesion"
 *     description: "Metodo para hacer login y obtener un token de usaurio"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses: 
 *       '201':
 *         description: "Login exitoso"
 *       '403':
 *         description: "Error en validar la informacion proporcionada"
 */
router.post("/login", loginValidator, login)

module.exports = router