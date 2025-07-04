import express from "express"
import { connect, version } from "mongoose"
import { Schema, model } from "mongoose"

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

const bookSchema = new Schema({
    title: { type: String, requerid: true, unique: true },
    author: { type: String, unique: true },
    publishedYear: { type: Number },
    genre: { type: String },
    available: { type: Boolean, default: true },
}, {
    versionKey: false
})

const Book = model("Book", bookSchema)


app.listen(PORT, () => {
    console.log(`✅Servidor HTTP en funcionamiento en puerto ${PORT},`)
    connectDb()
})