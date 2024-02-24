/**
 * Se crea este archivo para importar todas las rutas y no tenerlas en
 * el archivo principal app.js
 */

const express = require("express")
// modulo propio de node
const fs = require("fs")
// importamos un coustom middleware para validar el header
const { coustomHeader } = require("../middlewares/middleware")

const router = express.Router()

// especificamos la ruta del directorio
const PATH_ROUTES = __dirname

// creamos una funcion para eliminar la extencion .js del archivo
const removeExtencion = (fileName) => {
	// separamos el nombre del archivo por medio del punto y recuperamos el primer valor de array
	return fileName.split(".").shift()
}

// capturamos los archivos que se tienen en esta ruta
// const archivos = fs.readdirSync(PATH_ROUTES)
// console.log("archivos", archivos)
// no es necesario asignar a la variable
const filter = fs.readdirSync(PATH_ROUTES).filter((file) => {
	const name = removeExtencion(file)
	if(name !== "index"){
		// se agrega el endpoint, se requerie el archivo
		// se usa un middleware, aqui se usara para todas las rutas existentes
		router.use(`/${name}`, coustomHeader, require(`./${file}`))
	}
})

module.exports = router