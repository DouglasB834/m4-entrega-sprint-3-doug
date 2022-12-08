import { getProductIdService } from "../Services/getProductId.Service";

export const getProductIdController = async (request, res) => {
  const { id } = request.params;
  const [status, data] = await getProductIdService(id);
  return res.status(status).json(data);
};
