import { Request, Response } from "express"
import userModel from "../models/userModel"

export async function getAllUsers(request:Request, response: Response) : Promise<void> {
	try {
		const data = await userModel.find({});
		response.send({data})
	} catch (error) {
		response.status(500)
		response.send({error: "ERROR EN EL SERVIDOR"})
	}
}