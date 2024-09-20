import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <>
      <main className="container">
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
      </main>
    </>
  );
};

export default App;
