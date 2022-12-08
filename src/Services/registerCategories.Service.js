import database from "../database";
import { cresteCategoriesSchema } from "../Serializs/Categories.schema";

export const registerCategoriesService = async (data) => {
  try {
    const validatedbody = await cresteCategoriesSchema.validate(data,{
        stripUnknown: true,
        //nao enviar campo a mais 
        abortEarly:false
    });
    const queryRes = await database.query(
      `
        INSERT INTO
            categories(name)
        VALUES
            ($1)
        RETURNING *;
        `,
      [validatedbody.name]
    );
  
    return [201, queryRes.rows[0]];

  } catch (error) {
    return [400, { message: error.errors }];
  }
};
