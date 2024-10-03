import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import {useState} from "react"

const ProductCard = ({ product, addToCart, updateQuantity}) => {
  const [productAddedToCart, setProductAddedToCart] = useState(false);
  let type=null;
  const handleAddToCart=()=>{
    addToCart(product)
    setProductAddedToCart((prev)=>!prev)
  }
  const handleUpdateCart=(product, type)=>{
    updateQuantity(product, type)
  }


  return (
    <Card className=" w-[250px] h-[450px] bg-teal-100 border-2 border-gray-200 rounded-lg shadow-md">
      <CardHeader floated={false} color="blue-gray">
        <img src={product.image} className="h-fit w-fit object-cover " />
      </CardHeader>
      <CardBody className="flex flex-row justify-between px-4">
        <p>{product.title}</p>
        <p>{product.price}</p>
      </CardBody>
      <CardFooter>
        {
          productAddedToCart ? (
            <div className="gap-2 flex">
            <div className="flex flex-row justify-center gap-4">
            <button className='text-xl border-2 border-white px-2 rounded-sm' onClick={()=>handleUpdateCart(product, 'sub')} >- </button>
            <span> {product.quantity} </span>
            <button className='text-xl border-2 border-white px-2 rounded-sm' onClick={()=>handleUpdateCart(product, 'add')} >+</button>
            </div>
            <Button
          className="w-full rounded-md bg-red-300 py-2 px-4 bottom-0 text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-red-600 focus:shadow-none active:bg-red-600 hover:bg-red-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >Delete</Button>
            </div>
          ) :
        (
          <Button
          className="w-full rounded-md bg-yellow-300 py-2 px-4 bottom-0 text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-yellow-600 focus:shadow-none active:bg-yellow-600 hover:bg-yellow-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        )}
      </CardFooter >
    </Card>
  );
};

export default ProductCard;