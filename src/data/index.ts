import { IFormInput, IProduct } from "../Interface/intex";
export const ProductList :IProduct[]=[
  
]
export const formInputsList: IFormInput[] = [
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
export const Colors:string[] = [
  "#A31ACB",  // Violet
  "#3C2A21",  // Brown
  "#1F8A70",  // Teal
  "#820000",  // Dark Red
  "#FF0032",  // Bright Red
  "#FFC300",  // Yellow
  "#FF5733",  // Orange
  "#DAF7A6",  // Light Green
  "#581845",  // Deep Purple
  "#900C3F",  // Maroon
  "#C70039",  // Bright Pink
  "#28B463",  // Emerald Green
  "#5DADE2",  // Light Blue
  "#1F618D",  // Navy Blue
  "#AAB7B8",  // Silver
  "#DFFF00",  // Lime Yellow
  "#40E0D0",  // Turquoise
  "#800080",  // Purple
  "#FF7F50",  // Coral
  "#4682B4",  // Steel Blue
  "#FFD700",  // Gold
  "#DC143C",  // Crimson
  "#708090",  // Slate Gray
  "#2F4F4F",  // Dark Slate Gray
];

