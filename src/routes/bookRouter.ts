import { Router } from "express"
import { getAllBooks } from "../controller/bookController";

const bookRouter = Router()

bookRouter.get("/", getAllBooks)

export { bookRouter }