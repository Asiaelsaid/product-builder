import { ChangeEvent, useState } from "react";
import { IProduct } from "../Interface/intex";
import { Colors, FormInputsList, ProductList } from "../data";
import { ProductValidation } from "../Validation/ProductValidation";
import Input from "../components/UI/Input";
import ErrorMsg from "../components/ErrorMsg";
import CircleColor from "../components/CircleColor";
import ProductCard from "../components/ProductCard";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import Select from "../components/UI/Select";
import { v4 as uuidv4 } from "uuid";
import DeleteModal from "../components/UI/DeleteModal";

interface IProps {}
const HomePage = ({}: IProps) => {
  const defaultProductObj = {
    id: "",
    title: "",
    price: "",
    description: "",
    colors: [],
    category: {
      name: "",
      imgURL: "",
    },
    imgURL: "",
  };
  /* ------------------------- STATE----------------------- */
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({
    name: "",
    imgURL: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    imgURL: "",
  });

  /* ------------------------- HANDLER ----------------------- */
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const handleCategoryChange = (category: { name: string; imgURL: string }) => {
    setSelectedCategory(category);
  };
  const toggleColor = (color: string) => {
    setTempColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const submitHandler = (): void => {
    const { title, description, price, imgURL } = product;

    const errors = ProductValidation({
      title: title,
      description: description,
      price: price,
      imgURL: imgURL,
    });
    const hasErrorMsg =
      Object.values(errors).every((value) => value == "") &&
      Object.values(errors).some((value) => value == "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    if (isEditing) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === product.id
            ? { ...product, colors: tempColors, category: selectedCategory }
            : p
        )
      );
    } else {
      const newProduct = {
        ...product,
        colors: tempColors,
        category: selectedCategory,
        id: uuidv4(),
      };
      setProducts((prev) => [newProduct, ...prev]);
    }
    resetForm();
  };
  const resetForm = () => {
    setProduct(defaultProductObj);
    setSelectedCategory({ name: "", imgURL: "" });
    setTempColors([]);
    closeModal();
  };
  const editProduct = (productToEdit: IProduct) => {
    setProduct(productToEdit);
    setSelectedCategory(productToEdit.category);
    setTempColors(productToEdit.colors);
    setIsEditing(true);
    openModal();
  };
  const deleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };
  const handleDeleteClick = (productId:string) => {
    setSelectedProductId(productId); 
    setIsModalOpen(true); 
  };
  /* ------------------------- RENDER ----------------------- */
  const renderProductList = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      onEdit={editProduct}
      onDelete={handleDeleteClick}
    />
  ));
  const renderFormInputList = FormInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        onChange={handleInputChange}
        required
        value={product[input.name]}
      />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));
  const renderProductColors = Colors.map((color) => (
    <CircleColor key={color} color={color} onClick={() => toggleColor(color)} />
  ));
  const renderTempColors = tempColors.map((color) => (
    <span
      key={color}
      className="p-1 mr-1 mb-1 text-xs text-white rounded-md"
      style={{ backgroundColor: color }}
    >
      {color}
    </span>
  ));

  return (
    <div>
      <main className="container">
        <Button
          onClick={openModal}
          className=" block bg-teal-800 hover:bg-teal-900 mx-auto my-10 px-10 font-medium"
          width="w-fit"
        >
          Builder Product
        </Button>

        <div className="p-2 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 rounded-md">
          {renderProductList}
        </div>
        <form className="space-y-2 ">
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="ADD A NEW PRODUCT"
          >
            {renderFormInputList}
            <Select onCategoryChange={handleCategoryChange} />
            <div className="flex items-center flex-wrap space-x-1">
              {renderProductColors}
            </div>
            <div className="flex items-center flex-wrap space-x-1">
              {renderTempColors}
            </div>
            <div className="flex space-x-3">
              <Button className="bg-gray-700" onClick={submitHandler}>
                {isEditing?"Edit":"Submit"}
              </Button>
              <Button onClick={resetForm} className="bg-stone-400" type="button">
                Cancel
              </Button>
            </div>
          </Modal>
        </form>
        <DeleteModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onConfirm={() => deleteProduct(selectedProductId)} 
      />
      </main>
    </div>
  );
};
export default HomePage;
