import database from "../database"

export const deleteCategoryService = async (id)=>{
   
    try {
        const queryRes = await database.query(
        `
        DELETE FROM 
            categories 
        WHERE id = $1
        ;        
        `, [id]
        )
            return[204, {}]
    } catch (error) {
        return [400, { message: error.errors }];
    }
}