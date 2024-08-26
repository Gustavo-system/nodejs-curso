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

const getUserById = (id, callback) => {
	const user = users.find(user => user.id == id);

	(user) ? callback(null, user) : callback(`Usuario con el id ${id} no encontrado`)
}

module.exports = {
	getUserById
}