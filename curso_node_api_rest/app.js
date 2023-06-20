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


// corremos el servidor
app.listen(port, () => {
	// mosttramos un mensaje en consola si el servidor se inicio correctamente
	console.log(`Servidor escuchando por el puesto ${port}`)
})

dbConnection()