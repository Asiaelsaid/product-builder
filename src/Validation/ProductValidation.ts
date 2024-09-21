/**
 * 
 * @param product -- valid product
 * @returns --errors product 
 */
export const ProductValidation = (product: {
  title: string;
  description: string;
  price: string;
  imgURL: string;
}) => {
  const errors: {
    title: string;
    description: string;
    price: string;
    imgURL: string;
  } = {
    title: "",
    description: "",
    price: "",
    imgURL: "",
  };
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imgURL);
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product title must be between 10 and 80 characters !";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description =
      "Product description must be between 10 and 900 characters !";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Vaild price is required!";
  }
  if (!product.imgURL.trim() || !validUrl) {
    errors.imgURL = "Vaild image Url is required!";
  }
  return errors;
};
