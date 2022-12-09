import database from "../database";

export const deleteProductService = async (id) => {
  const queryRes = await database.query(
    `
    DELETE FROM 
        products 
    WHERE id = $1
    RETURNING*
    ;             
    `,
    [id]
  );
  if (!queryRes.rows[0]) {
    return [400, { message: error.message }];
  }
  return [204, {}];
};
