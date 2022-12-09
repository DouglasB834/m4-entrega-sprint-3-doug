import * as yup from "yup";

export const cresteCategoriesSchema = yup.object().shape({
  name: yup.string().min(3).required(),
});

export const UpdateCategorySchema = yup.object().shape({
  name: yup.string().min(3).required(),
});
