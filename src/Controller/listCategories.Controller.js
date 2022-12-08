import { listCategoriesService } from "../Services/listCategories.Service";

export const listCategoriesController = async (request, res) => {
  const  data = await listCategoriesService();
  return res.send(data);
};
