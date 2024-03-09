const { check, validationResult } = require("express-validator")
const validateResult = require("../utils/handleValidators")

// lo mejor seria crear un validaror por cada funcion que creemos y segun lo necesitemos
const createUserValidator = [
	check("name").exists().notEmpty().isLength({min:5, max:25}),
	check("email").exists().notEmpty().isEmail(),
	check("password").exists().notEmpty(),
	(request, response, next) => {
		// movemos la funcion a un hendle para poder usarla y no copiar y pegar el mismo codigo
		return validateResult(request, response, next)
		/**
		 * se debe realizar un response por que si no se queda colgado el servidor
		 * esperando una respuesta de las validaciones
		 */
		// try {
		// 	validationResult(request).throw()
		// 	return next()
		// } catch (err) {
		// 	response.status(403)
		// 	response.send({ errors: err.array() })
		// }
	}

	/**
	 * Si se tiene un objeto anidado, se puede validar de la siguente forma, nodoPadre.nodoHijo
	 * 
	 * check("direcciones.calle").exists().notEmpty(),
	 * check("direcciones.colonia").exists().notEmpty(),
	 * check("direcciones.municipio").exists().notEmpty(),
	 */
]

const getOneUserValidator = [
	check("id").exists().notEmpty().isMongoId(),
	(request, response, next) => {
		return validateResult(request, response, next)
	}
]

module.exports = { createUserValidator, getOneUserValidator }