import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Model from "./components/UI/Model";
import Button from "./components/UI/Button";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main className="container">
        <Button onClick={() => setIsOpen(true)} className="bg-blue-500">
          Add Product{" "}
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
        <Model
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="ADD A NEW PRODUCT"
        />
      </main>
    </>
  );
};

export default App;
