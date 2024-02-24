const { validationResult } = require("express-validator")

const validateResult = (request, response, next) => {
	try {
		validationResult(request).throw()
		return next() // continua con el proceso
	} catch (err) {
		response.status(403)
		response.send({ errors: err.array() })
	}
}

module.exports = validateResult