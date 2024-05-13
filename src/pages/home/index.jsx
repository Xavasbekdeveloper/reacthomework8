import React from "react";
import Hero from "../../components/hero";
import Products from "../../components/products";
import Device from "../../components/device";
import ProducInfo from "../../components/product info";
import Faq from "../../components/faq";
import { memo } from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <Products />
      <Device />
      <ProducInfo />
      <Faq />
    </main>
  );
};

export default memo(Home);
