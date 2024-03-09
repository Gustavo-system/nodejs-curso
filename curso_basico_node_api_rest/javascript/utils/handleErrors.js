const handleHtppErrors = (response, message, statusCode, error = null) => {
	response.status(statusCode)
	response.send({ statusCode, message, error})
}


module.exports = {
	handleHtppErrors
}