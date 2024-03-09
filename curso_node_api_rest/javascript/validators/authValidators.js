const { check } = require("express-validator")
const validateResult = require("../utils/handleValidators")

const loginValidator = [
	check("email").exists().notEmpty().isEmail(),
	check("password").exists().notEmpty(),
	(request, response, next) => {
		return validateResult(request, response, next)
	}
]

module.exports = {
	loginValidator
}