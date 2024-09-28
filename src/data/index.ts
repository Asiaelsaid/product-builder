import { IFormInput, IProduct } from "../Interface/intex";
export const ProductList: IProduct[] = [
  {
    id: "1",
    title: "Apple iPhone 14",
    description: "6.1-inch display, A15 Bionic chip, Dual-camera system.",
    price: "999",
    category: {
      name: "Smartphones",
      imgURL: "src/assets/images/iphone14.jpg",
    },
    imgURL: "src/assets/images/iphone14.jpg",
    colors: ["#FF0032", "#1F8A70", "#FFC300"],
  },
  {
    id: "2",
    title: "Samsung Galaxy S21",
    description: "6.2-inch display, Exynos 2100, Triple-camera system.",
    price: "799",
    category: {
      name: "Smartphones",
      imgURL: "src/assets/images/Samsung Galaxy S21.jpg",
    },
    imgURL: "src/assets/images/Samsung Galaxy S21.jpg",
    colors: ["#1F618D", "#FF5733", "#FFC300"],
  },
  {
    id: "3",
    title: "Sony WH-1000XM4",
    description: "Wireless noise-cancelling headphones.This Wireless noise-cancelling headphones",
    price: "349",
    category: {
      name: "Headphones",
      imgURL: "src/assets/images/Sony WH.jpg",
    },
    imgURL: "src/assets/images/Sony WH.jpg",
    colors: ["#581845", "#900C3F", "#AAB7B8"],
  },
  {
    id: "4",
    title: "Dell XPS 13",
    description: "13.4-inch laptop with InfinityEdge display.",
    price: "1200",
    category: {
      name: "Laptops",
      imgURL: "src/assets/images/DELL-XPS-13.jpg",
    },
    imgURL: "src/assets/images/DELL-XPS-13.jpg",
    colors: ["#1F618D", "#5DADE2", "#AAB7B8"],
  },
  {
    id: "5",
    title: "Sony PlayStation 5",
    description: "Next-gen gaming console with immersive gameplay.",
    price: "499",
    category: {
      name: "Gaming Consoles",
      imgURL: "src/assets/images/Sony PlayStation 5.jpg",
    },
    imgURL: "src/assets/images/Sony PlayStation 5.jpg",
    colors: ["#FFFFFF", "#000000", "#C70039"],
  },
  {
    id: "6",
    title: "Apple MacBook Air M2",
    description: "13.6-inch Retina display, M2 chip, 8GB RAM.",
    price: "1099",
    category: {
      name: "Laptops",
      imgURL: "src/assets/images/Apple MacBook Air M2.jpg",
    },
    imgURL: "src/assets/images/Apple MacBook Air M2.jpg",
    colors: ["#AAB7B8", "#FFC300", "#581845"],
  },
  {
    id: "7",
    title: "Google Pixel 7",
    description: "6.3-inch display, Tensor G2 chip, dual-camera.",
    price: "599",
    category: {
      name: "Smartphones",
      imgURL: "src/assets/images/Google Pixel 7.jpg",
    },
    imgURL: "src/assets/images/Google Pixel 7.jpg",
    colors: ["#FFC300", "#581845", "#28B463"],
  },
  {
    id: "8",
    title: "JBL Flip 6 Bluetooth Speaker",
    description: "Portable waterproof speaker with powerful sound.",
    price: "129",
    category: {
      name: "Speakers",
      imgURL: "src/assets/images/JBL Flip 6 Bluetooth Speaker.jpg",
    },
    imgURL: "src/assets/images/JBL Flip 6 Bluetooth Speaker.jpg",
    colors: ["#4682B4", "#FF7F50", "#FFD700"],
  },
  {
    id: "9",
    title: "Microsoft Surface Pro 9",
    description: "13-inch touchscreen, Intel i7, 16GB RAM.This 13-inch touchscreen ",
    price: "1399",
    category: {
      name: "Tablets",
      imgURL: "src/assets/images/Microsoft Surface Pro 9.jpg",
    },
    imgURL: "src/assets/images/Microsoft Surface Pro 9.jpg",
    colors: ["#AAB7B8", "#FFC300", "#5DADE2"],
  },
  {
    id: "10",
    title: "LG OLED TV C1 Series",
    description: "55-inch 4K Smart OLED TV with AI ThinQ.",
    price: "1499",
    category: {
      name: "Televisions",
      imgURL: "src/assets/images/LG OLED TV C1 Series.jpg",
    },
    imgURL: "src/assets/images/LG OLED TV C1 Series.jpg",
    colors: ["#2F4F4F", "#DC143C", "#FFD700"],
  },
  {
    id: "11",
    title: "Nikon Z7 II",
    description: "45.7 MP mirrorless camera with 4K UHD video recording.",
    price: "2999",
    category: {
      name: "Cameras",
      imgURL: "src/assets/images/Nikon Z7 II.jpg",
    },
    imgURL: "src/assets/images/Nikon Z7 II.jpg",
    colors: ["#000000", "#FFC300", "#4682B4"],
  },
  {
    id: "12",
    title: "Bose QuietComfort 45",
    description: "Noise-cancelling over-ear headphones.This Noise-cancelling over-ear headphones",
    price: "329",
    category: {
      name: "Headphones",
      imgURL: "src/assets/images/Bose QuietComfort 45.jpg",
    },
    imgURL: "src/assets/images/Bose QuietComfort 45.jpg",
    colors: ["#5DADE2", "#AAB7B8", "#000000"],
  },
  {
    id: "13",
    title: "Dyson V15 Detect",
    description: "Powerful cordless vacuum cleaner with laser technology.",
    price: "749",
    category: {
      name: "Home Appliances",
      imgURL: "src/assets/images/Dyson V15 Detect.jpg",
    },
    imgURL: "src/assets/images/Dyson V15 Detect.jpg",
    colors: ["#FFC300", "#FF5733", "#581845"],
  },
  {
    id: "14",
    title: "Nike Air Max 270",
    description: "Sporty and stylish shoes with Max Air cushioning.",
    price: "150",
    category: {
      name: "Shoes",
      imgURL: "src/assets/images/Nike Air Max 270.jpg",
    },
    imgURL: "src/assets/images/Nike Air Max 270.jpg",
    colors: ["#FF0032", "#581845", "#AAB7B8"],
  },
  {
    id: "15",
    title: "Adidas Ultraboost 22",
    description: "Comfortable running shoes with energy-returning cushioning.",
    price: "180",
    category: {
      name: "Shoes",
      imgURL: "src/assets/images/didas Ultraboost 22.jpg",
    },
    imgURL: "src/assets/images/didas Ultraboost 22.jpg",
    colors: ["#000000", "#FF7F50", "#FFD700"],
  },
  {
    id: "16",
    title: "Sony Bravia XR OLED A90J",
    description: "65-inch 4K OLED TV with Cognitive Processor XR.",
    price: "2999",
    category: {
      name: "Televisions",
      imgURL: "src/assets/images/Sony Bravia XR OLED A90J.jpg",
    },
    imgURL: "src/assets/images/Sony Bravia XR OLED A90J.jpg",
    colors: ["#2F4F4F", "#FFC300", "#5DADE2"],
  },
  {
    id: "17",
    title: "Canon EOS R5",
    description: "45 MP mirrorless camera with 8K video recording.",
    price: "3899",
    category: {
      name: "Cameras",
      imgURL: "src/assets/images/Canon EOS R5.jpg",
    },
    imgURL: "src/assets/images/Canon EOS R5.jpg",
    colors: ["#000000", "#DC143C", "#FFC300"],
  },
  {
    id: "18",
    title: "Fitbit Versa 3",
    description: "Health and fitness smartwatch with built-in GPS.",
    price: "229",
    category: {
      name: "Wearables",
      imgURL: "src/assets/images/Fitbit Versa 3.jpg",
    },
    imgURL: "src/assets/images/Fitbit Versa 3.jpg",
    colors: ["#1F618D", "#FFC300", "#28B463"],
  },
  {
    id: "19",
    title: "Samsung Galaxy Watch 4",
    description:
      "Smartwatch with body composition analysis and fitness tracking.",
    price: "249",
    category: {
      name: "Wearables",
      imgURL: "src/assets/images/Samsung Galaxy Watch 4.jpg",
    },
    imgURL: "src/assets/images/Samsung Galaxy Watch 4.jpg",
    colors: ["#000000", "#4682B4", "#FFC300"],
  },
  {
    id: "20",
    title: "GoPro HERO10 Black",
    description:
      "Action camera with 5.3K video and HyperSmooth 4.0 stabilization.",
    price: "499",
    category: {
      name: "Cameras",
      imgURL: "src/assets/images/GoPro HERO10 Black.jpg",
    },
    imgURL: "src/assets/images/GoPro HERO10 Black.jpg",
    colors: ["#000000", "#FF0032", "#AAB7B8"],
  },
];

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
export const Colors: string[] = [
  "#A31ACB", // Violet
  "#3C2A21", // Brown
  "#1F8A70", // Teal
  "#820000", // Dark Red
  "#FF0032", // Bright Red
  "#FFC300", // Yellow
  "#FF5733", // Orange
  "#DAF7A6", // Light Green
  "#581845", // Deep Purple
  "#900C3F", // Maroon
  "#C70039", // Bright Pink
  "#28B463", // Emerald Green
  "#5DADE2", // Light Blue
  "#1F618D", // Navy Blue
  "#AAB7B8", // Silver
  "#DFFF00", // Lime Yellow
  "#40E0D0", // Turquoise
  "#800080", // Purple
  "#FF7F50", // Coral
  "#4682B4", // Steel Blue
  "#FFD700", // Gold
  "#DC143C", // Crimson
  "#708090", // Slate Gray
  "#2F4F4F", // Dark Slate Gray
];
