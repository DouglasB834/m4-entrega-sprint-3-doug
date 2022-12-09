import { registerProductsService } from "../Services/registerProducts.Service";

export const registerProductsController = async (request, res) => {
  const [status, data] = await registerProductsService(request.validatedbody);
  return res.status(status).json(data);
};
