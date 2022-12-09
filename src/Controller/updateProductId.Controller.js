import { updateProductIdService } from "../Services/updateProductId.Service";

export const updateProductIdController = async (request, res) => {
  const { id } = request.params;
  const [status, data] = await updateProductIdService(
    request.validatedbody,
    id
  );
  return res.status(status).json(data);
};
