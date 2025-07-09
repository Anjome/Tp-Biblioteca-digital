
import { Request, Response } from "express";
import { Book } from "../models/bookModel"


const getAllBooks = async (req: Request, res: Response): Promise<any> => {
    try {
        const books = await Book.find()
        res.json({
            success: true,
            data: books,
            message: "Listar todos los libros"
        })
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const getBookById = async (req: Request, res: Response): Promise<any> => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Libro no encontrado",
                data: book,
            })
            res.json({
                success: true,
                message: "Libro obtenido"
            })
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}




export { getAllBooks, getBookById }