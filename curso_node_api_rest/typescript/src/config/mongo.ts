import "dotenv/config"
import { connect } from "mongoose"

async function dbConnection() : Promise<void> {
	const DB_URI: string = <string>process.env.DB_URI
	await connect(DB_URI);
}

export default dbConnection