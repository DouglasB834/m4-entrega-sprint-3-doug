import * as yup from "yup";

export const productsSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  price: yup.number().positive().required(),
  category_id: yup.number().required(),
});
export const updateSchema = yup.object().shape({
  name: yup.string().min(3).required(),
});

// export const productsUuidShape = yup.object().shape({
//   id: yup.string().uuid()
// });

