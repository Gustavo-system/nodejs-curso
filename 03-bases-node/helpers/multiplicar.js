const fs = require('fs'); // de esta forma de importan los paquetes que se requieren

const crearArchivo = async (numero = 5, listar) => {
	// CON ASYNC Y AWAIT
	try {
		let salida = '';

		for (let i = 1; i <= 10; i++) {
			salida += `${numero} x ${i} = ${numero * i}\n`;
		}

		if (listar) {
			console.log(salida);
		}

		fs.writeFileSync(`./archivos/Tabla-${numero}.txt`, salida);

		return `tabla-${numero}.txt`;
	} catch (exeption) {
		console.log(exeption);
		throw exeption;
	}

	// CON PROMESA
	// return new Promise( (resolve, reject) => {
	//     let salida = '';

	//     for (let i = 1; i <= 10; i++) {
	//         salida += `${numero} x ${i} = ${numero * i}\n`;
	//     }

	//     console.log(salida)

	//     try {
	//         fs.writeFileSync(`Tabla-${numero}`, salida);
	//         resolve(`Tabla-${numero}.txt`);
	//     } catch (error) {
	//         reject(error);
	//     }

	// });

	// LA MENERA NORMAL QUE SE PODRIA HACER, PERO PARA CAPTURAR ERRORES SE COMVIERTE EN UNA FUNCION QUE RETORNE ALGO
	// let salida = '';

	// for (let i = 1; i <= 10; i++) {
	//     salida += `${numero} x ${i} = ${numero * i}\n`;
	// }

	// console.log(salida)

	// // METODO DEL PAQUETE REQUERIDO
	// // fs.writeFile(`Tabla-${numero}`, salida, (err) => {
	// //     if ( err ) throw err;
	// //     console.log(`Tabla del ${numero} creada`);
	// // });
	// try {
	//     fs.writeFileSync(`Tabla-${numero}.txt`, salida);
	// } catch (error) {
	//     throw error
	// }

	// console.log(`Tabla del ${numero} creada`);
};

module.exports = {
	// esto en redundante para js, se puede hacer pero solo en caso de que
	// se renombre la funcion a exportar
	// crearArchivo : crearArchivo
	// nuevo_nombre : funcion o valor

	// esto es lo mimso que la parte de arriba pero simplificada
	crearArchivo,
};
