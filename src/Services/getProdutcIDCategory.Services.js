import database from "../database";

export const getProdutcIDCategoryServices = async (id) => {
  const queryRes = await database.query(
    `
    SELECT p.name, p.price, c.name as "category" FROM 	
        products p 
    JOIN
        categories c  ON p.category_id = c.id
    WHERE 
        p.category_id= $1 ;
    `,
    [id]
  );
  return [200, queryRes.rows];
};
