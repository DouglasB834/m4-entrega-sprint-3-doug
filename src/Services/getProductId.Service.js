import database from "../database";

export const getProductIdService = async (id) => {
    try {
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
        
          return [200, queryRes.rows[0]];

    } catch (error) {
      return [400, { massage: error.errors }];
    }

};
