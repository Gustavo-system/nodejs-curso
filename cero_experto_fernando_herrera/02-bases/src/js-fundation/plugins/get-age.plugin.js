const getAgePlugin = require('get-age')

const getAge = (birthdate) => {
	if (!birthdate) return new Error("birthdate es requerido")
	return getAgePlugin(birthdate)
}

module.exports = {
	getAge
}