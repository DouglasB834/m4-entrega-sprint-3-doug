import { getProdutcIDCategoryServices } from "../Services/getProdutcIDCategory.Services";

export const getProdutcIDCategoryController = async (req, res) => {
  const { id } = req.params;
  const [status, data] = await getProdutcIDCategoryServices(id);
  return res.status(status).json(data);
};
