import { UpdateCategoryService } from "../Services/UpdateCategory.Service";

export const UpdateCategoryController = async (request, res) => {
  const { id } = request.params;
  const [status, data] = await UpdateCategoryService(request.body, id);

  return res.status(status).json(data);
};
