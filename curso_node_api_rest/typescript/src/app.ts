// const express = require("express")
import express from "express"
//const cors = require("cors")
import cors from "cors"
//const swaggerUI = require("swagger-ui-express")
import swaggerUI from "swagger-ui-express"
//require("dotenv").config()
import "dotenv/config"
//const openApiConfigration = require("./docs/swagger")
import openApiConfigration from "./docs/swagger"
import dbConnection from "./config/mongo"
import routes from "./routes"

const app = express()

const port:string | number = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

app.use('/docs', swaggerUI.serve, swaggerUI.setup(openApiConfigration))
app.use("/api/v1", routes)

app.listen(port, () => {
	console.log(`Servidor escuchando por el puesto: http://localhost/${port}`)
})

dbConnection()
	.then(() => console.log("conexion a la DB exitosa"))
	.catch(err => console.log(`error al conectar a la DB ${err.message}`))

// module.exports = app