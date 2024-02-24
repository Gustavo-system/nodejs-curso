const { storageModel } = require("../models")

const PUBLIC_URL = process.env.PUBLIC_URL

const getStorages = async (request, response) => {
	const data = await storageModel.find({})
	console.log("consulta ->", data)
	return response.send({data})
}


const createStorage = async (request, response) => {
	const { file } = request

	const fileData = {
		url: `${PUBLIC_URL}/${file.filename}`,
		fileName : file.filename
	}

	const responseData = await storageModel.create(fileData)

	console.log("consulta ->", responseData)

	return response.send({ responseData })
}

module.exports = {
	getStorages,
	createStorage
}