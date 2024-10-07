import React, { useContext, useEffect } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import Banner from "../components/Carousel";
import { useLoaderData } from "react-router-dom";
import { CurrencyContext } from "../contexts/CurrencyContext";

const Home = () => {
  const [featuredProductData, currencyRateData] = useLoaderData();
  const { handleCurrencyConversion } = useContext(CurrencyContext);
  
  useEffect(() => {
    handleCurrencyConversion(currencyRateData.AUD, currencyRateData.INR);
  }, [currencyRateData]);


  return (
    <div>
      <Banner />
      <FeaturedProducts featuredProductData={featuredProductData} />
    </div>
  );
};

export default Home;
