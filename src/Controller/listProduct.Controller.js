import { listProductsServices } from "../Services/listProducts.Services";

export const listProductsController = async (resquest, res) => {
  const data = await listProductsServices();
  return res.send(data);
};
