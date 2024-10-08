import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({featuredProductData}) => {
  
  return (
    <section id="featuredProducts">
      <h2 className="text-center">Our Top Products</h2>
      <div className="flex flex-wrap gap-2 justify-evenly">
        {featuredProductData?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};
export default FeaturedProducts;
