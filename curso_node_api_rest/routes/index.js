/**
 * Se crea este archivo para importar todas las rutas y no tenerlas en
 * el archivo principal app.js
 */

const express = require("express")
// modulo propio de node
const fs = require("fs") 

const router = express.Router()

// especificamos la ruta del directorio
const PATH_ROUTES = __dirname

// capturamos los archivos que se tienen en esta ruta
const archivos = fs.readdirSync(PATH_ROUTES)
console.log("archivos", archivos)

module.exports = router