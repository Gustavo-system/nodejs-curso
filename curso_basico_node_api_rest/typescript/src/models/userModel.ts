import { Schema, model } from "mongoose";
import { User } from "../interfaces/user"

const userSchema = new Schema<User>(
	{
		name: {
			required: true,
			type: String,
		},
		password: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		role: {
			type: ["user", "admin"],
			default: "user"
		}
	},
	{
		versionKey: false,
		timestamps: false,
	}
);

const userModel = model("users", userSchema);
export default userModel;