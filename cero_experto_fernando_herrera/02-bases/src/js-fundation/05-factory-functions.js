// instoduccion a las factory funtions
// funciones que crean mas funciones

// no es buena idea depender de terceros
//const { v4: uuidv4 } = require('uuid');
//const getAge = require('get-age')

// cramos mejor nuestros modulos, en caso de que se tenga que actualizar la dependencia solo se haga en un lugar
// const { getUuid } = require('./plugins/get-uuid.plugin')
// const { getAge } = require('./plugins/get-age.plugin')

// podemos reducir las lineas de importacion de arriba cuando es de una misma carpeta
//const { getUuid, getAge } = require('./plugins')

// const buildPerson = ({ name, birthdate }) => {
// 	return {
// 		id: getUuid(),
// 		name,
// 		birthdate,
// 		age: getAge(birthdate)
// 	}
// }

// const person = { name: "papagallo", birthdate: "1999-01-01" }
// const newPerson = buildPerson(person)
// console.table(newPerson)

// factory funtion
const buildMakePerson = (getUuid, getAge) => {
	return ({ name, birthdate }) => {
		return {
			id: getUuid(),
			name,
			birthdate,
			age: getAge(birthdate)
		}
	}
}

module.exports = {
	//buildPerson,
	buildMakePerson
}