const users = [
	{
		id: 1,
		name: "Cocodriloqui"
	},
	{
		id: 2,
		name: "Panfilo"
	},
];


function getUserById(id, callback) {
	//const user = users.find(user => user.id == id)
	const user = users.find(function (user) {
		return user.id === id;
	})

	if (!user) {
		return callback(`Usuario con el id ${id} no encontrado`)
	}

	return callback(null, user)
}

module.exports = {
	getUserById
}