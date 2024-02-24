const multer = require("multer")

const storage = multer.diskStorage({
	// cb -> es la abreviacion de callback
	destination: function (request, file, cb) {
		// especificamos la ruta donde guardad el archivo
		const pathStorage = `${__dirname}/../storage`
		// no tenemos errores y se pasa un null como primer parametro
		// como segundo parametro se pasa la ruta donde guardar
		cb(null, pathStorage)
	},
	filename: function (request, file, cb) {
		// obtener la extencion del archivo
		const extencionFile = file.originalname.split('.').pop()
		// creamos el nuevo nombre del archivo
		const fileName = `file_${Date.now()}.${extencionFile}`
		// indicamos que la funcion termina y se ejecuta el callback
		cb(null, fileName)
	}
})

const uploadMiddleware = multer({
	// como es el mismo nombre se puede escribir solo una palabra
	// storage : storage
	storage
})

module.exports = uploadMiddleware