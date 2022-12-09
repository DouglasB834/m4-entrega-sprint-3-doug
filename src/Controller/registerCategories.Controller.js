import { registerCategoriesService } from "../Services/registerCategories.Service";

export const registerCategoriesController = async (request, res) => {
  const [status, data] = await registerCategoriesService(request.body);
  return res.status(status).json(data);
};
