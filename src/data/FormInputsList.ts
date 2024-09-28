import { IFormInput } from "../Interface/intex";

const FormInputsList: IFormInput[] = [
  { id: "title", name: "title", label: "Product Title ", type: "text" },
  {
    id: "description",
    name: "description",
    label: " Product Description",
    type: "text",
  },
  { id: "imageURL", name: "imgURL", label: "Product Image Url", type: "text" },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];
export default FormInputsList;
