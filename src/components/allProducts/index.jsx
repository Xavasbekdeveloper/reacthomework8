import React from "react";
import "./allProducts.scss";
import axios from "../../api";
import { useState } from "react";
import { useEffect } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`/products`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  let allProducts = data?.map((product) => (
    <div className="allProducts__card">
      <div className="allProducts__card__img">
        <Link to={`/product/${product.id}`}>
          <img src={product.images[0]} alt={product.title} />
        </Link>
      </div>
      <div className="allProducts__card__info">
        <h3 title={product.title} className="allProducts__card__title">
          {product.title}
        </h3>
        <p className="allProducts__card__text">${product.price}</p>
      </div>
    </div>
  ));

  return (
    <section className="allProducts">
      <div className="container">
        <h1 className="allProducts__title">Shop All Products</h1>
        <div className="allProducts__cards">{allProducts}</div>
      </div>
    </section>
  );
};

export default memo(AllProducts);
