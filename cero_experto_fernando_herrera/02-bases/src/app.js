// importaciones
//const templateJs = require('./js-fundation/01-template.js')
//const { emailTemplate } = require('./js-fundation/01-template');

// 02 desestructuracion
//require('./js-fundation/02-destructuring.js')

// 03 callbacks
//const { getUserById } = require('./js-fundation/03-callbacks.js');

// 04 funciones de flecha
//const { getUserById } = require('./js-fundation/04-arrow-functions.js');

// 05 factory functions
// const { buildMakePerson } = require('./js-fundation/05-factory-functions')

// 06 promesas
const getPokemonById = require('./js-fundation/06-promises')


// 01-importaciones
//console.log(templateJs.emailTemplate)
//console.log(emailTemplate)

// 03-callbacks
//const id = 1;

// getUserById(id, function (error, data) {
// 	if (error) {
// 		throw new Error(error);
// 	}

// 	//console.table({ data })
// 	// esto se convierte en el callback hell
// 	getUserById(id + 1, function (error, data2) {
// 		if (error) {
// 			throw new Error(error);
// 		}

// 		console.table({ data, data2 })
// 	})
// });

// 04 funciones de flecha
// getUserById(id, (error, data) => {
// 	if (error) throw new Error(error);
// 	console.table({ data });
// });

// 05 factory functions
// const { getUuid, getAge } = require('./js-fundation/plugins')
// const buildPerson = buildMakePerson(getUuid, getAge);

// const data = { name: "papagallo", birthdate: "1999-01-01" }
// const person = buildPerson(data);

// console.log(person)


// 06 promesas
getPokemonById(4)
	.then(pokemon => console.log(pokemon))
	.catch(err => console.error(err))
	.finally(() => console.log("fin de la promesa"))
