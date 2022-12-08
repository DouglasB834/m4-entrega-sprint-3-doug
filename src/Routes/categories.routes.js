import { Router } from "express";
import { deleteCategoryController } from "../Controller/deleteCategory.Controller";
import { deleteProductController } from "../Controller/deleteProduct.Controller";
import { getCategoryIdController } from "../Controller/getCategoryId.Controller";
import { getProductIdController } from "../Controller/getProductId.Controller";
import { getProdutcIDCategoryController } from "../Controller/getProdutcIDCategory.controller";
import { listCategoriesController } from "../Controller/listCategories.Controller";
import { listProductsController } from "../Controller/listProduct.Controller";
import { registerCategoriesController } from "../Controller/registerCategories.Controller";
import { registerProductsController } from "../Controller/registerProducts.Controller.js";
import { UpdateCategoryController } from "../Controller/UpdateCategory.Controller";
import { updateProductIdController } from "../Controller/updateProductId.Controller";
import { productsValidatedMiddleware } from "../middleware/validateProduct";
import { verificationNameMiddleware } from "../middleware/verificationNameMiddleware";
import { productsSchema, updateSchema } from "../Serializs/Products.Schema";

export const routeUser = Router();

routeUser.get("/categories", listCategoriesController);
routeUser.get("/categories/:id", getCategoryIdController);
routeUser.patch("/categories/:id", UpdateCategoryController);
routeUser.post("/categories", verificationNameMiddleware, registerCategoriesController);
routeUser.delete("/categories/:id", deleteCategoryController);

//products
routeUser.get("/products", listProductsController);
routeUser.post("/products",productsValidatedMiddleware(productsSchema) ,registerProductsController);
routeUser.patch("/products/:id",productsValidatedMiddleware(updateSchema) ,updateProductIdController);
routeUser.get("/products/:id", getProductIdController);
routeUser.get("/products/category/:id", getProdutcIDCategoryController);


routeUser.delete("/products/:id", deleteProductController);
