import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import httpStatus from "http-status";

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      
    //validate
     await schema.parseAsync({
      body: req.body,
    });
    next();
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: "Validation Error",
        error: error,
      });
      next(error)
    }
  };
};

export default validateRequest;