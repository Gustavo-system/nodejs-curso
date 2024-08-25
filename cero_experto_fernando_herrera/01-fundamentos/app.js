// const message = 'Hola mundo';
// console.log("message ->", message);

const fs = require('fs')

const data = fs.readFileSync('archivo_demo.txt', 'utf-8')
//console.log("data del archivo : ", data)
const newData = data.replace(/React/ig, "Angular")
//fs.writeFileSync('archivo_modificado_angular.txt', newData)

// Numero de palabras React que existen en el documento demo
const wordsReact = data.match(/React/ig ?? []).length
//console.log("\nNumero de palabras que existen en el documento", wordsReact)

console.log('Inicio de programa');

setTimeout(() => {
	console.log('Primer Timeout');
}, 3000);

setTimeout(() => {
	console.log('Segundo Timeout');
}, 0);

setTimeout(() => {
	console.log('Tercer Timeout');
}, 0);

console.log('Fin de programa');