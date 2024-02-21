const { userModule } = require("../models")


const getUsers = async (request, response) => {
	// otra forma de realizar la logica
	// userModule.find({}).then((resp) => {
	// 	console.log("response del api", resp)
	// 	return response.send(resp)
	// }).catch(err => console.log("problemas al realizar la consulta"))

	// obtenemos todos los registros con find({}) que es propio de mongoose
	// forma corta
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