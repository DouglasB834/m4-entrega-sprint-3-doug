import { msgError } from "../Errors/errors";

export const validatedIDMiddleware = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) throw new msgError("Invalid status code", 404);

  return next();
};
// gostaria de ver outra forma de fazer
export const validatedUuidMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;    
  
  if (!regexExp.test(id)) {
      throw new msgError("invalid input, id must be a valid uuid", 404)
    }    
  return next();

};

