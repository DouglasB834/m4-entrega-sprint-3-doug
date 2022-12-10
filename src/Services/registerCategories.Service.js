import database from "../database";
import { cresteCategoriesSchema } from "../Serializs/Categories.schema";

export const registerCategoriesService = async (data) => {
  const validatedbody = await cresteCategoriesSchema.validate(data, {
    stripUnknown: true,
    abortEarly: false,
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
};
