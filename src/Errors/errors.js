export class msgError extends Error {
  constructor(message, statusCode = 400) {
    super();
    this.message = { message };
    this.statusCode = statusCode;
  }
}

export const globalError = (error, req, res, next) => {
  if (error instanceof msgError) {
    return res.status(error.statusCode).json(error.message);
  }

  return res.status(500).json({ message: "internal serve error" });
};
