import { model, Schema } from "mongoose"


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

export { Book }