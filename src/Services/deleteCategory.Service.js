import database from "../database";
import { msgError } from "../Errors/errors";

export const deleteCategoryService = async (id) => {
  try {
    const queryRes = await database.query(
    `
    DELETE FROM 
        categories 
    WHERE id = $1
    ;        
    `,
      [id]
    );
    return [204, {}];
  } catch (error) {
    throw new msgError(error.message, 404);
  }
};
