
import { Request, Response } from "express";
import { Book } from "../models/bookModel";
import { IBook } from "../interfaces/book.interface";
import { handleError } from "../utils/handleError";


const getAllBooks = async (req: Request, res: Response): Promise<any> => {
    try {
        const books = await Book.find()
        res.json({
            success: true,
            message: "Obteniendo todos los libros",
            data: books

        })
    } catch (error) {
        handleError(res, error, "Error al obtener los libros");
    }
}

const getBookById = async (req: Request, res: Response): Promise<any> => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Libro no encontrado",
                data: null,
            })
            res.json({
                success: true,
                message: "Libro obtenido",
                data: book,
            })
        }
    } catch (error) {
        handleError(res, error, "Error al obtener el libro");
    }
}

const addNewBook = async (req: Request<{}, {}, IBook>, res: Response): Promise<any> => {
    try {
        const body: IBook = req.body;
        const newBook = new Book(body)
        await newBook.save()

        res.status(201).json({
            success: true,
            message: "Libro creado con exito",
            data: newBook

        })
    } catch (error) {
        handleError(res, error, "Error al crear el libro");
    }
}

const updateBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const updateBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        if (!updateBook) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Libro no encontrado"
                })
        }
        res.json({
            success: true,
            message: "Libro actualizado",
            data: updateBook
        });
    } catch (error) {
        handleError(res, error, "Error al actualizar el libro");
    }
}

const deleteBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const deleteBook = await Book.findByIdAndDelete(req.params.id);
        if (!deleteBook) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Libro no encontrado",
                });
        }
        res.json({
            success: true,
            message: "Libro eliminado",
            data: deleteBook,
        })
    } catch (error) {
        handleError(res, error, "Error al eliminar el libro");
    }
}






export { getAllBooks, getBookById, addNewBook, updateBook, deleteBook }