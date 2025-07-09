import { Router } from "express"
import { getAllBooks, getBookById, addNewBook, updateBook, deleteBook } from "../controller/bookController"

const bookRouter = Router()

bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBookById)
bookRouter.post("/", addNewBook)
bookRouter.put("/:id", updateBook)
bookRouter.delete("/:id", deleteBook)








export { bookRouter }