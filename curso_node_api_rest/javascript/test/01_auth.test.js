const supertest = require("supertest")
const app = require("../app")
const { userModel } = require("../models")
const { mongoose } = require("mongoose")


/**
 * Esto se ejecutra despues de realizar todas las pruebas
 */
// beforeAll(async () => {
// 	await userModel.deleteMany({})
// })

describe("[AUTH] estas son las pruebas del /api/auth", () => {
	test("/login, esto deberia retornar un 403 por que no tiene la licencia", async () => {
		const data = {
			"email": "demo@prueba.com",
			"password": "12345"
		}

		const response = await supertest(app).post("/api/v1/auth/login").send(data)
		
		expect(response.statusCode).toEqual(403)
	})

	test("/login, esto deberia retornar un 404 por que no existe el usuario", async () => {
		const data = {
			"email": "demo@prueba.com",
			"password": "12345"
		}

		const response = await supertest(app).post("/api/v1/auth/login").send(data).set({ Licencia: "12345" })

		expect(response.statusCode).toEqual(404)
	})

	test("/login, esto deberia retornar un 200, existe el usuario y validamos el cuerpo de la response", async () => {
		const data = {
			"email": "test@prueba.com",
			"password": "12345"
		}

		const response = await supertest(app).post("/api/v1/auth/login").send(data).set({ Licencia: "12345" })

		expect(response.statusCode).toEqual(200)
		expect(response.body).toHaveProperty("data")
		expect(response.body).toHaveProperty("data.token")
		expect(response.body).toHaveProperty("data.user")
	})
})

afterAll(() => {
	mongoose.connection.close()
})