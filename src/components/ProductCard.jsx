import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProductCard = () => {
  return (
    <Card className="w-fit bg-teal-100 border-2 border-gray-200 rounded-sm shadow-md">
      <CardHeader>
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-[200px] w-[200px] object-cover p-4"
        />
      </CardHeader>
      <CardBody className="flex flex-row justify-between px-4">
        <p>Name</p>
        <p>Price</p>
      </CardBody>
      <CardFooter className="p-4">
        <Button
          className="w-full rounded-md bg-yellow-300 py-2 px-4 text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-orange-600 focus:shadow-none active:bg-yellow-500 hover:bg-yellow-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Button
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
