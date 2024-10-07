import React from "react";
import { useLocation, useParams } from "react-router-dom";
import SingleProductCard from "../components/SingleProductCard";

const SingleProduct = () => {

  // const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;
console.log(product);
  return (
    <SingleProductCard product={product}/>
  );
};

export default SingleProduct;
