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
import { validatedIDMiddleware, validatedUuidMiddleware } from "../middleware/validatedID.Middleware";
import { productsValidatedMiddleware } from "../middleware/validateProduct.Middlware";
import { verificationNameMiddleware } from "../middleware/verificationName.Middleware";
import { productsSchema, updateSchema } from "../Serializs/Products.Schema";

export const routeUser = Router();
//categories
routeUser.get("/categories", listCategoriesController);
routeUser.get("/categories/:id",validatedIDMiddleware, getCategoryIdController);
routeUser.patch("/categories/:id", validatedIDMiddleware,UpdateCategoryController);
routeUser.post("/categories", verificationNameMiddleware, registerCategoriesController);
routeUser.delete("/categories/:id", validatedIDMiddleware,deleteCategoryController);

//products
routeUser.get("/products", listProductsController);
routeUser.post("/products",productsValidatedMiddleware(productsSchema) ,registerProductsController);
routeUser.patch("/products/:id",validatedUuidMiddleware,productsValidatedMiddleware(updateSchema) ,updateProductIdController);
routeUser.get("/products/:id", validatedUuidMiddleware, getProductIdController);
routeUser.get("/products/category/:id",validatedIDMiddleware,getProdutcIDCategoryController);


routeUser.delete("/products/:id",validatedUuidMiddleware, deleteProductController);
