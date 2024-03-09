const mongoose = require("mongoose")

const storeSchema = new mongoose.Schema(
	{
		url: {
			type: String
		},
		fileName: {
			type: String
		}
	},
	{
		timestamps: true,
		versionKey: false
	}	
)

module.exports = mongoose.model("storages", storeSchema)