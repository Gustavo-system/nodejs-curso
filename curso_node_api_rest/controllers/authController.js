const { matchedData } = require("express-validator")
const { userModel } = require("../models")
const { handleHtppErrors } = require("../utils/handleErrors")
const { compareEncrypt } = require("../utils/handlePassword")
const { tokenSign } = require("../utils/handleJwt")

const login = async (request, response) => {

	try {
		console.log("auth")
		request = matchedData(request)

		const user = await userModel.findOne({ email: request.email }).select('password name email role')
		console.log("response user", user)

		if (!user) return handleHtppErrors(response, "Usuario y/o password incorrectos", 400)

		const isCorrectPassword = await compareEncrypt(request.password, user.password)

		console.log("isCorrectPassword", isCorrectPassword)

		if (!isCorrectPassword) return handleHtppErrors(response, "Usuario y/o password incorrectos", 401)

		user.set('password', undefined, { strict: false })

		const data = {
			token : await tokenSign(user),
			user
		}

		return response.send({data})
	} catch (error) {
		console.log("error", error)
		return handleHtppErrors(response, "Problemas al procesar la solicitud", 500)
	}
}

module.exports = { login }