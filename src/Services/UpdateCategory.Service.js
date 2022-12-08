import database from "../database";
import { UpdateCategorySchema } from "../Serializs/Categories.schema";

export const UpdateCategoryService = async (data, id) => {
  try {
    const validatedbody = await UpdateCategorySchema.validate(data, {
      stripUnknown: true,
      abortEarly: false,
    });
    console.log(validatedbody.name, id)
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
  
    return [200, queryRes.rows[0]];
  } catch (error) {
    return [400, {message: error.error}];
  }
};
