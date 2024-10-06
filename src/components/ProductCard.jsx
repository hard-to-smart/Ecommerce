import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CurrencyContext } from "../contexts/CurrencyContext";

const ProductCard = ({ product}) => {
  const {currentCurrencyRate} = useContext(CurrencyContext);
  const { cartProduct, addToCart, updateQuantity } = useContext(CartContext)
  const [productAddedToCart, setProductAddedToCart] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);

  const getUpdatedQuantity = () => {
    const productInCart = cartProduct.find((item) => item.id === product.id);
    return productInCart ? productInCart.quantity : 0;
  };

  useEffect(() => {
    const quantity = getUpdatedQuantity();
    setProductQuantity(quantity);
    setProductAddedToCart(quantity > 0); 
  }, [cartProduct, product]);

  let type=null;
  const handleAddToCart=()=>{
    addToCart(product)
    setProductAddedToCart((prev)=>!prev)
  }
  const handleUpdateCart=(product, type)=>{
    updateQuantity(product, type)
  }
  const {currencyConversion} = useContext(CurrencyContext);
  console.log(currencyConversion)

  return (
    <Card className=" w-[250px] h-[450px] bg-teal-100 border-2 border-gray-200 rounded-lg shadow-md">
    <Link to={`/product/${product.id}`} key={product.id} state={{ product}}>
      <CardHeader floated={false} className="flex justify-center">
        <img src={product.image} className="h-[200px] w-[150px] object-contain " />
      </CardHeader>
      <CardBody className="flex flex-col gap-2">
        <p>{product.title.substring(0,50)}</p>
        <p>Price: {currentCurrencyRate} {Number(product.price * currencyConversion[currentCurrencyRate]).toFixed(2)}</p>
      </CardBody>
      </Link>
      <CardFooter className="mt-auto">
        {
          productAddedToCart ? (
            <div className="flex flex-row justify-center gap-4">
            <button className='text-xl border-2 border-white px-2 rounded-sm' onClick={()=>handleUpdateCart(product, 'sub')} >- </button>
            <span> {productQuantity}</span>
            <button className='text-xl border-2 border-white px-2 rounded-sm' onClick={()=>handleUpdateCart(product, 'add')} >+</button>
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