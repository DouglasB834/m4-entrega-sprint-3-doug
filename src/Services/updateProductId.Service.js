import database from "../database";
import { msgError } from "../Errors/errors";

export const updateProductIdService = async (data, id) => {

  let query = ` UPDATE products SET `
    const keys = Object.keys(data)
    const values = Object.values(data)

    keys.forEach((key, index) => {
      query += `${key} = \$${index+=1}, `
  })
    query = query.slice(0, -2)
    
    query += ` WHERE id = \$${keys.length+=1} RETURNING *;` 

    const queryRes = await database.query(
      query,
      [...values, id]
  )

  // const queryRes = await database.query(
  //   `    
  //   UPDATE  
  //       products
  //   SET 
  //     name = $1 
  //   WHERE 
  //     id = $2
  //   RETURNING *;
  //   `,
  //   [data.name, id]
  // );
  // if (!queryRes.rows[0]) {
  //   throw new msgError("produto nao encontrado", 404);
  // }
  return [200, queryRes.rows[0]];
};
