import database from "../database"

export const getCategoryIdService = async(id)=>{

    const queryRes = await database.query(
        `
        SELECT 	
            * 
        FROM 
            categories 
        WHERE id =$1;
        `,
        [id]
        
    )
    if(!queryRes.rows[0]){
        return[400, {message: "categoria nao encontrada"}] 
    }
       
    return[200, queryRes.rows[0]]

}