import { IProduct } from "../Interface/intex";
import Image from "./Image";
import Button from "./UI/Button";
import { txtSlicer } from "./untils/Slicer";
interface IProps {
product:IProduct;
onEdit:(product:IProduct)=>void;
onDelete: (productId: string) => void;
}
const ProductCard:React.FC<IProps>  = ({product,onEdit,onDelete}) => {

  return (
    <>
      <div className="max-w-sm md:max-w-lg mx-auto md:mx-auto border rounded-md my-3 p-2">
        <Image
          imageUrl={product.imgURL}
          alt={product.title}
          className="rounded-md my-2 h-40 w-full object-contain"
        />
        <h2>{product.title} </h2>
        <p className="h-12">
        {txtSlicer(product.description)}

        </p>
        <div className="flex my-2 space-x-1">
          {product.colors.map((color)=>{
            return <span key={color} className={`w-5 h-5 rounded-full cursor-pointer`} style={{backgroundColor:color}}/>
          })}
        </div>
        <div className="flex items-center justify-between">
          <p> $ {product.price} </p>
          <Image
            imageUrl={product.category.imgURL}
            alt={product.title}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between mt-5 space-x-2">
          <Button className="bg-stone-500" onClick={()=>onEdit(product)}>Edit</Button>
          <Button className="bg-red-700" onClick={() => onDelete(product.id)}>Delete</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
