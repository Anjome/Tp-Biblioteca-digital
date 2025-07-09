import { model, Schema } from "mongoose"
import { IBook } from "../interfaces/book.interface"

const bookSchema = new Schema<IBook>({
    title: { type: String, requerid: true, unique: true },
    author: { type: String, unique: true },
    publishedYear: { type: Number },
    genre: { type: String },
    available: { type: Boolean, default: true },
}, {
    versionKey: false
})

const Book = model<IBook>("Book", bookSchema)

export { Book }