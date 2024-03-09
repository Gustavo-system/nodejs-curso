import "dotenv/config"
import { NextFunction, Request, Response } from "express"

const API_KEY:string = <string>process.env.API_KEY

export const validateLicenciaHeader = (request:Request, response:Response, next:NextFunction) => {
	const licencia:string = <string>request.headers.licencia
	if (licencia == API_KEY) {
		next()
	} else {
		response.status(403)
		response.send({ error: "LA APLICACION NO TIENE PERMISOS DE EJECUCION" })
	}
}