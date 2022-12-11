import database from "../database";
import { msgError } from "../Errors/errors";

export const validatedIDMiddleware = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) throw new msgError("Invalid status code", 404);

  return next();
};
// gostaria de ver outra forma de fazer
export const validatedUuidMiddleware = async (req, res, next) => {
  const { id } = req.params;
  try {
  const  queryRes = await database.query(
  `
  SELECT 
      * 
  FROM 
      Products WHERE id = $1;
  `, [id]
  )
   
  if(queryRes.rowCount <=0){
    throw new msgError("invalid input, id must be a valid uuid", 404)
  }
    
  } catch (error) {
    throw new msgError("invalid input, id must be a valid uuid", 404)
  }
  return next();

};

