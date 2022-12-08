import database from "../database"

export const deleteProductService = async (id)=>{
    
    try {
        const queryRes = await database.query(
            `
            DELETE FROM 
                products 
            WHERE id = $1
            ;             
            `,
            [id]
        )
        return [204,{}]
    } catch (error) {
        return [400, { message: error.errors }];
    }


}