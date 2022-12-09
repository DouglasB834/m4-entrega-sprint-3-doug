import database from "../database";

export const listCategoriesService = async () => {
  const queryRes = await database.query(
    `
    SELECT 	* FROM 	categories c ;
    `
  );
  return queryRes.rows;
};
