// importamos los paquetes que se requieren
const expres = require("express")
const cors = require("cors")
const dbConnection = require("./config/mongo")

// cargamos las variables de entorno
require("dotenv").config()

// creamos la instancia del servidor
const app = expres()

// se especifica el puesto en el cual se levanta el servidor
// const port = 3000; 
// obtenemos el puerto de las variables de entorno
const port = process.env.PORT || 3000

// utilizamos los cors para poder tener accedos desde donde sea
app.use(cors())

/**
 * hacemos uso de las rutas
 * si lo importamos asi se crearan muchas lineas en este archivo principal
 * app.use("/api/v1", require("./routes/users"))
 * /

/**
 * Se crea un archivo index.js en la carpeta routes para importar todas las rutas
 * y solo importar una linea en el server
 * 
 * NOTA: cabe mencionar que el nombre del archivo debe ser el mismo que el path de la ruta
 */
app.use("/api/v1", require("./routes"))

dbConnection()

// corremos el servidor
app.listen(port, () => {
	// mosttramos un mensaje en consola si el servidor se inicio correctamente
	console.log(`Servidor escuchando por el puesto ${port}`)
})