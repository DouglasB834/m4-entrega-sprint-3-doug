import database from "../database";
import { msgError } from "../Errors/errors";

export const getCategoryIdService = async (id) => {
  const queryRes = await database.query(
    `
    SELECT 	
        * 
    FROM 
        categories 
    WHERE id =$1;
    `,
    [id]
  );
  const user = queryRes.rows[0];
  if (!user) {
    throw new msgError("categoria nao encontrada", 400);
  }

  return [200, user];
};
