import { deleteProductService } from "../Services/deleteProduct.Service";

export const deleteProductController = async (req, res) => {
  const { id } = req.params;
  const [status, data] = await deleteProductService(id);
  return res.status(status).json(data);
};
