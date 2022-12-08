import { getCategoryIdService } from "../Services/getCategoryIdService";


export const getCategoryIdController = async (request, res)=>{
    const {id } = request.params
    const [status, data] = await getCategoryIdService(id);
    return res.status(status).json(data);
}