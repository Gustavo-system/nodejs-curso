const bcryptjs = require("bcryptjs")

const encrypt = async (password) => {
	try {
		const hash = await bcryptjs.hash(password, 10)
		console.log("el hash que se genero", hash)
		return hash
	} catch (error) {
		throw new Error(`error en encrypt password ${error.message}`)
	}
};

const compareEncrypt = async (password, hash) => {
	return await bcryptjs.compare(password, hash)
};

module.exports = {encrypt, compareEncrypt}


