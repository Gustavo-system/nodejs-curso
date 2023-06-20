const express = require("express")

const router = express.Router()

router.get("/", (request, response) => {
	const data = "Hola mundo"
	response.send(data)
})


module.exports = router