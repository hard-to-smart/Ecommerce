import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { useContext } from 'react';
import { CurrencyContext } from '../contexts/CurrencyContext';

const Bill = ({ cartProduct }) => {
  const {currentCurrencyRate, currencyConversion} = useContext(CurrencyContext);

  const totalPriceCalculator = () => {
    const total = cartProduct.reduce(
      (accumulator, product) => (Number(product.price * currencyConversion[currentCurrencyRate]).toFixed(2) * product.quantity) + accumulator, 0 );
    return total;
  };

  return (
    <section id="ordertotal" className="flex  items-center">
      <Card className="w-full h-full bg-blue-gray-50">
        <CardHeader className="my-4">
          <Typography className="text-3xl font-bold w-full text-center">
            Order Bill
          </Typography>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col w-[500px]">
            {cartProduct.map((productInCart, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <p className="font-semibold flex-wrap">{productInCart.title}</p>
                <p>Quantity: {productInCart.quantity}</p>
                <p>Price: {Number(productInCart.price * currencyConversion[currentCurrencyRate]).toFixed(2) * productInCart.quantity}</p>
                <hr />
              </div>
            ))}
          </div>
        </CardBody>
        <CardFooter>
          <Typography>Total : {totalPriceCalculator()}</Typography>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Bill;
