import Image from "./Image";
import Button from "./UI/Button";
import { txtSlicer } from "./Untils/Slicer";
const ProductCard = () => {
  return (
    <>
      <div className="max-w-sm md:max-w-lg mx-auto md:mx-auto border rounded-md my-3 p-2">
        <Image
          imageUrl="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-83687-35537.jpg&fm=jpg"
          alt="kides image"
          className="rounded-md my-2"
        />
        <h2>title </h2>
        <p>
          {txtSlicer(
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  scrambled it to make a type specimen book"
          )}
        </p>
        <div className="flex my-2 space-x-1">
          <span className="w-5 h-5 bg-neutral-500 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-amber-800 rounded-full cursor-pointer" />
        </div>
        <div className="flex items-center justify-between">
          <p> $ 200 </p>
          <Image
            imageUrl="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-83687-35537.jpg&fm=jpg"
            alt="kides image"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between mt-5 space-x-2">
          <Button className="bg-blue-500">Eidt</Button>
          <Button className="bg-red-600">Delete</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
