const swaggerJsdoc = require("swagger-jsdoc")

const swaggerDefinition = {
	openapi: "3.0.0",
	info: {
		title: "Documentacion de mi primera API Demo",
		version: "1.0.0"
	},
	servers: [
		{
			url: "http://localhost:3001/api/v1"
		},
		{
			url: "http://dev:3001/api/v1"
		},
		{
			url: "http://qa:3001/api/v1"
		}
	],
	components: {
		schemas: {
			users: {
				type: "object",
				required: ["name", "email", "password"],
				properties: {
					name: {
						type: "string",
						example: "prueba"
					},
					email: {
						type: "string",
						example: "prueba@prueba.com"
					},
					password: {
						type: "string",
						example: "*****"
					}
				}
			}
		}
	}

}

const options = {
	swaggerDefinition: swaggerDefinition,
	apis: [
		"./routes/*.js"
	]
}

const openApiConfigration = swaggerJsdoc(options)

module.exports = openApiConfigration