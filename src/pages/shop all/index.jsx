import React from "react";
import AllProducts from "../../components/allProducts";
import { memo } from "react";

const ShopAll = () => {
  return (
    <>
      <AllProducts />
    </>
  );
};

export default memo(ShopAll);
