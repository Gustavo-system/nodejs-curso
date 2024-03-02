const { userModel } = require("../models")
const { handleHtppErrors } = require("../utils/handleErrors")
const { matchedData } = require("express-validator")
const { encrypt } = require("../utils/handlePassword")
const { tokenSign } = require("../utils/handleJwt")


const getUsers = async (request, response) => {
	// otra forma de realizar la logica
	// userModel.find({}).then((resp) => {
	// 	console.log("response del api", resp)
	// 	return response.send(resp)
	// }).catch(err => console.log("problemas al realizar la consulta"))

	// obtenemos todos los registros con find({}) que es propio de mongoose
	// forma corta
	const data = await userModel.find({})

	console.log("consulta", data)
	return response.send({ data })
}


const getUser = async (request, response) => {
	try {
		request = matchedData(request)
		const { id } = request
		const data = await userModel.findById(id)
		console.log("data de un usuario", data)
		return response.send({ data })
	} catch (error) {
		console.log("error", error.message)
		handleHtppErrors(response, "Problemas al procesar la solicitud", 500, error.message)
	}
}


const createUsers = async (request, response) => {
	try {
		// obtenemos el body de la request 
		// const body = request.body

		// obtenemos por medio de desestructuracion el body del request
		// aqui viene todo lo que se manda en el request body, tenemos que limpiar para evitar datos malos
		// const { body } = request
		// console.log("datos obtenidos en el body: ", body)

		// limpiamos la data y hacemos que no se registre algo mal
		const bodyClean = matchedData(request)

		// agregamos nueva funcionalidad para cifrar la password del usuario
		const passwordHash = await encrypt(bodyClean.password)
		const body = { ...bodyClean, password: passwordHash }

		const responseData = await userModel.create(body)
		responseData.set('password', undefined, { strict: false }) // ocultamos la password
		
		console.log("datos obtenidos despues de guardar el registro: ", responseData)

		const dataResponse = {
			token: await tokenSign(responseData),
			user: responseData
		}

		return response.send({ data: dataResponse })
	} catch (error) {
		console.log("error en el controller", error.message)
		handleHtppErrors(response, "Problemas al procesar la solicitud", 500, error.message)
	}
}

const updateUser = async (request, response) => {
	try {
		const { id, ...body } = matchedData(request)

		console.log("este es el id a actualizar ->", id, "body ->", body)
		const data = await userModel.findByIdAndUpdate(id, body)
		// const data = await userModel.findByIdAndUpdate({_id:id}, body) // podemos especificar mas si se desea
		// const data = await userModel.findByIdAndUpdate({_id:id}, body, {new:true}) // podemos usar otro metodo llamada findOneAndUpdate
		console.log("data update", data)
		response.send({ data })
	} catch (error) {
		console.log("error en el update", error.message)
		handleHtppErrors(response, "Problemas al procesar la solicitud", 500, error.message)
	}
}

module.exports = {
	getUsers,
	getUser,
	createUsers,
	updateUser
}