import express from "express"
import { bookRouter } from "./routes/bookRouter"
import { connectDb } from "./config/connectMongoDb"

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())


app.use("/api-rest-full", bookRouter)

app.listen(PORT, () => {
    console.log(`✅Servidor HTTP en funcionamiento en puerto ${PORT},`)
    connectDb()
})