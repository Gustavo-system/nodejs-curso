import express, { Router } from "express"
import { getAllUsers } from "../controllers/usersController"

const router:Router = express.Router()

router.get("/", getAllUsers)

export { router }