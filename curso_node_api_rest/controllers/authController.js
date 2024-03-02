const login = async (request, response) => {
	console.log("auth")

	return response.send({"hola": "auth"})
}

module.exports = {login}