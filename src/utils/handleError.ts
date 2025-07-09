
import { Response } from "express";

const handleError = (res: Response, error: unknown, customMessage?: string) => {
    const err = error as Error;

    res.status(500).json({
        success: false,
        message: customMessage || err.message,
    });
};


export { handleError }