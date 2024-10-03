import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
const SingleProductCard = ({ product }) => {
  return (
    <Card className="w-3/4 flex-row p-2 bg-cyan-100">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0  shrink-0 rounded-xl"
      >
        <img
          src={product.image}
          alt="card-image"
          className="h-[200px] w-[200px] object-contain rounded-xl"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {product.category}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {product.title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {product.description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default SingleProductCard;
