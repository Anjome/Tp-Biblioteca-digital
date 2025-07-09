
import { Request, Response } from "express";
import { Book } from "../models/bookModel";
import { IBook } from "../interfaces/book.interface";


const getAllBooks = async (req: Request, res: Response): Promise<any> => {
    try {
        const books = await Book.find()
        res.json({
            success: true,
            message: "Obteniendo todos los libros",
            data: books

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
                data: book
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

const addNewBook = async (
    req: Request<{}, {}, IBook>,
    res: Response
): Promise<any> => {
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
        const err = error as Error
        res.status(500).json({
            success: false,
            message: err.message
        })
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
        const err = error as Error
        res.status(400).json({
            success: false,
            message: err.message
        });
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
        const err = error as Error
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}






export { getAllBooks, getBookById, addNewBook, updateBook, deleteBook }