import { Router } from "express"
import { getAllBooks, getBookById } from "../controller/bookController"

const bookRouter = Router()

bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBookById)


export { bookRouter }