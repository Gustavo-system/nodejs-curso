const express = require("express")
const uploadMiddleware = require("../utils/handleStorage")
const { createStorage, getStorages } = require("../controllers/storageController")
const { coustomHeader } = require("../middlewares/middleware")

const router = express.Router()

// separamos la logica de la ruta
// router.post("/", uploadMiddleware.single("myfile"), (request, response) => {
// 	response.send({a:1})
// })

router.get("/", getStorages)
router.post("/", uploadMiddleware.single("myfile"), createStorage)

module.exports = router