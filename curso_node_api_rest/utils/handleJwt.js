const jsonwebtoken = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET

const tokenSign = async (user) => {
	const sign = jsonwebtoken.sign({_id: user._id, role: user.role}, JWT_SECRET, {expiresIn: "1h"})
	console.log("token generado", sign)
	return sign
}

const verifyToken = async (token) => {
	try {
		return jsonwebtoken.verify(token, JWT_SECRET)
	} catch (error) {
		console.log("error en el token de sesion", error.message)
		return null
	}
}

module.exports = {tokenSign, verifyToken}