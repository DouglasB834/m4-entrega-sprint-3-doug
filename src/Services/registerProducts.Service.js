import database from "../database"
import { registerProductsSchema } from "../Serializs/Products.Schema"

export const registerProductsService = async (data)=>{

    try {
   
        const queryRes = await database.query(
        `
        INSERT INTO 
	        products(name, price, category_id)
        VALUES 
            ($1, $2, $3) 
        RETURNING*;           
        `,
        [data.name, data.price, data.category_id]
        )
        return [201, queryRes.rows[0]]
        
    } catch (error) {
        return [400, { message: error.erros}]
    }




}