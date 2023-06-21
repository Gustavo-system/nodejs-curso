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
		router.use(`/${name}`, require(`./${file}`))
	}
})

module.exports = router