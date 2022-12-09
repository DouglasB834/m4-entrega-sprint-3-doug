import database from "../database";

export const listProductsServices = async () => {
  const queryRes = await database.query(
    `
    SELECT 
        * 
    FROM 
        Products ;
    `
  );
  return queryRes.rows;
};
