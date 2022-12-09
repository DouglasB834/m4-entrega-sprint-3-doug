import database from "../database";
import { msgError } from "../Errors/errors";

export const getProductIdService = async (id) => {
  console.log("teste");
  const queryRes = await database.query(
    `
    SELECT p.name,p.price, c.name as "category" FROM 	
        products p 
    JOIN
        categories c  ON p.category_id = c.id
    WHERE 
    p.id = $1;
    `,
    [id]
  );
  if (!queryRes.rows[0]) throw new msgError("categoria nao encontrada", 404);

  return queryRes.rows[0];
};
