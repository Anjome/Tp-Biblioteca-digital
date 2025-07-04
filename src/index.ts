import express from "express"
import { connect } from "mongoose"

process.loadEnvFile()

const PORT = process.env.PORT || 3000
const URI_DB = process.env.URI_DB || ""

const app = express()

const connectDb = async () => {
    try {
        await connect(URI_DB)
        console.log("✅Conectado a MongoDB")
    } catch (error) {
        console.log("🛑Error al conectar a MongoDB")
    }
}

app.listen(PORT, () => {
    console.log(`✅Servidor HTTP en funcionamiento en puerto ${PORT},`)
    connectDb()
})