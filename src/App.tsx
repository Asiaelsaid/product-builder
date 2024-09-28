import { ChangeEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Model from "./components/UI/Model";
import Button from "./components/UI/Button";
import { Colors, formInputsList } from "./data";
import Input from "./components/UI/Input";
import { IProduct } from "./Interface/intex";
import { ProductValidation } from "./Validation/ProductValidation";
import ErrorMsg from "./components/ErrorMsg";
import CircleColor from "./components/CircleColor";
import Select from "./components/UI/Select";

const App = () => {
  const defaultProductObj = {
    id: "",
    title: "",
    price: "",
    description: "",
    colors: [],
    category: {
      name:"",
      imgURL:"",
    },
    imgURL: "",
  };
  /* ------------------------- STATE----------------------- */
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [tempColors, setTempColors] = useState<string[]>([]);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    imgURL: "",
  });

  /* ------------------------- HANDLER ----------------------- */
  const openModel = () => setIsOpen(true);
  // const closeModel = () => setIsOpen(false);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const submitHandler = (): void => {
    // const submitHandler = (event:FormEvent<HTMLFormElement>): void => {
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
  };
  const onCancel = () => {
    setProduct(defaultProductObj);
    // closeModel();
  };

  /* ------------------------- RENDER ----------------------- */

  const renderFormInputList = formInputsList.map((input) => (
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
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        setTempColors((prev) => [...prev, color]);
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
      }}
    />
  ));
  const renderTempColors = tempColors.map((color) => (
    <span
      key={color}
      className="p-1 mr-1 mb-1 text-xs text-white rounded-md"
      style={{ backgroundColor: color }}
    >
      {" "}
      {color}
    </span>
  ));

  return (
    <>
      <main className="container">
        <Button
          onClick={openModel}
          className=" block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium"
          width="w-fit"
        >
          Builder Product
        </Button>

        <div className="p-2 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 rounded-md">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <form className="space-y-2">
          <Model
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="ADD A NEW PRODUCT"
          >
            {renderFormInputList}
            <div className="flex items-center flex-wrap space-x-1">
              {renderTempColors}
            </div>
            <Select />
            <div className="flex items-center flex-wrap space-x-1">
              {renderProductColors}
            </div>
            <div className="flex space-x-3">
              <Button className="bg-gray-500" onClick={submitHandler}>
                Submit
              </Button>
              <Button onClick={onCancel} className="bg-blue-500" type="button">
                Cancel
              </Button>
            </div>
          </Model>
        </form>
      </main>
    </>
  );
};

export default App;
