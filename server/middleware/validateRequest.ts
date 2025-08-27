import { NextFunction, Request, Response } from "express";
import { ZodObject, ZodError } from "zod";
import ErrorHandler from "../utils/ErrorHandler";

export const validateRequest =
  (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (result.success) {
      // Replace req.body with parsed data
      req.body = result.data;
      return next();
    }

    if (result.error instanceof ZodError) {
      const errorMessages = result.error.issues.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));

      // Send errors properly via your ErrorHandler
      return next(new ErrorHandler(JSON.stringify(errorMessages), 400));
    }

    // Fallback if error is not a ZodError
    return next(new ErrorHandler("Invalid request payload", 400));
  };
