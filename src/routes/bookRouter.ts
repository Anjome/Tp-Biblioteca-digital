import { Router } from "express"
import { getAllBooks, getBookById, addNewBook, updateBook } from "../controller/bookController"

const bookRouter = Router()

bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBookById)
bookRouter.post("/", addNewBook)
bookRouter.put("/", updateBook)








export { bookRouter }