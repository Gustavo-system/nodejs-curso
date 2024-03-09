// importamos el modulo de mongoose
const mongoose = require("mongoose")

// se declara el modelo
const userSchema = new mongoose.Schema(
	// se declaran sus propiedades
	{
		name: {
			// se declaron los tipos de datos
			type: String,
		},
		email: {
			type: String,
			unique: true
		},
		password: {
			type: String,
			select: false // ocultamos la password para todas las consultas a mongo
		},
		role: {
			type: ["user", "admin"],
			default: "user"
		}
	}
)

/*
se exporta el modulo de forma de modelo,
declarando el nombre de la tabla con el schema que se usara
*/
module.exports = mongoose.model("users", userSchema)