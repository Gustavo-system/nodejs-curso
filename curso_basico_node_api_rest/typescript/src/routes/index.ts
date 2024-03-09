import express, { Router } from "express"
import { readdirSync } from "fs"
import { validateLicenciaHeader } from "../middlewares/middleware"

const router:Router = express.Router()

const PATH_ROUTES = __dirname

function removeExtencion(fileName:string) : string {
	return <string>fileName.split(".").shift()
}

function loadRouter(file:string) : void{
	const name = removeExtencion(file)
	if (name !== "index") {
		// importacion dinamica
		import(`./${file}`).then((routerModule) => {
			router.use(`/${name}`, validateLicenciaHeader, routerModule.router)
		})
	}
}

readdirSync(PATH_ROUTES).filter((file) => loadRouter(file))

export default router