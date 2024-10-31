import { Router } from "express";
import { categoryController } from "../controllers/category.js";

export const categoryRouter = Router()

categoryRouter.get('/', categoryController.GetCategories)

categoryRouter.post('/', categoryController.AddCategory)

categoryRouter.put('/:kategoriaid', categoryController.UpdateCategory)

categoryRouter.delete('/:kategoriaid', categoryController.DeleteCategory)