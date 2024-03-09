const { storageModel } = require("../models")
const { handleHtppErrors } = require("../utils/handleErrors")

const PUBLIC_URL = process.env.PUBLIC_URL

const getStorages = async (request, response) => {
	try {
		const data = await storageModel.find({})
		console.log("consulta ->", data)
		return response.send({ data })
	} catch (error) {
		console.log("error", error)
		handleHtppErrors(response, "Problemas al procesar la solicitud", 500)
	}
	
}


const createStorage = async (request, response) => {
	try {
		const { file } = request

		const fileData = {
			url: `${PUBLIC_URL}/${file.filename}`,
			fileName: file.filename
		}

		const responseData = await storageModel.create(fileData)
		console.log("consulta ->", responseData)

		return response.send({ responseData })
	} catch (error) {
		console.log("error", error)
		handleHtppErrors(response, "Problemas al procesar la solicitud", 500)
	}
}

module.exports = {
	getStorages,
	createStorage
}