import database from "../database";
import { UpdateCategorySchema } from "../Serializs/Categories.schema";

export const UpdateCategoryService = async (data, id) => {
    const validatedbody = await UpdateCategorySchema.validate(data, {
      stripUnknown: true,
      abortEarly: false,
    });
    const queryRes = await database.query(
    `
    UPDATE  
        Categories
    SET 
        name = $1
    WHERE 
        id =  $2
    RETURNING *
    `,
      [validatedbody.name, id]
    );

    if(!queryRes.rows[0]){
      throw new msgError("categoria inexistente",400);

    }
  
    return [200, queryRes.rows[0]];

};
