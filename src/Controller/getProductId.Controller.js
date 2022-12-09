import { getProductIdService } from "../Services/getProductId.Service";

export const getProductIdController = async (request, res) => {
  const { id } = request.params;
  console.log(id);
  const data = await getProductIdService(id);
  return res.status(200).json(data);
};
