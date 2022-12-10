import { deleteCategoryService } from "../Services/deleteCategory.Service";

export const deleteCategoryController = async (req, res) => {
  const { id } = req.params;
  const [status, data] = await deleteCategoryService(id);
  return res.status(status).json(data);
};
