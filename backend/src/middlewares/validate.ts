import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserUpdateRequest = [
  body("name").isString().notEmpty().withMessage("Name must be provided"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("AddressLine1 must be provided"),
  body("city").isString().notEmpty().withMessage("City must be provided"),
  body("country").isString().notEmpty().withMessage("Country must be provided"),
  handleValidationErrors,
];
