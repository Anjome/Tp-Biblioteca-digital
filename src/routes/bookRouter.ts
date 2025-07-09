import { Router } from "express"
import { getAllBooks, getBookById, addNewBook } from "../controller/bookController"

const bookRouter = Router()

bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBookById)
bookRouter.post("/", addNewBook)








export { bookRouter }