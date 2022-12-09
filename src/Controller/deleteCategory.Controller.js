import { deleteCategoryService } from "../Services/deleteCategory.Serve";

export const deleteCategoryController = async (req, res) => {
  const { id } = req.params;
  const [status, data] = await deleteCategoryService(id);
  return res.status(status).json(data);
};
