import database from "../database"

export const updateProductIdService = async(data, id)=>{

    try {
        const queryRes = await database.query(
        `    
        UPDATE  
            products
        SET 
        name = $1 
        WHERE 
        id = $2
        RETURNING *;
        `,
        [data.name, id]
        )
        return [200, queryRes.rows[0]]
    } catch (error) {
        return [400,{message: error.errors}]
    }
    `

    `
}