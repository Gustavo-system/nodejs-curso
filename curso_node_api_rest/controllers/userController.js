const { userModule } = require("../models")


const getUsers = async (request, response) => {
	// obtenemos todos los registros con find({}) que es propio de mongoose
	const data = await userModule.find({})
	console.log("consulta", data)
	return response.send({ data })
}


const createUsers = async (request, response) => {
	// obtenemos el body de la request 
	// const body = request.body

	// obtenemos por medio de desestructuracion el body del request
	const { body } = request
	console.log("datos obtenidos en el body: ", body)
	const responseData = await userModule.create(body)
	console.log("datos obtenidos despues de guardar el registro: ", responseData)

	return response.send({ data: responseData })
}

module.exports = {
	getUsers,
	createUsers
}