import database from "../database"

export const verificationNameMiddleware = async(req, res, next )=>{
    const { name} = req.body  
    const queryRes = await database.query(
        `
        SELECT 	categories.name  FROM categories 
        `
    )
    const dataName =  queryRes.rows.find( element=> element.name == name)
    if(dataName){
        return res.status(400).json({ message: "Name already registered" })
    }
    
    return next()
}