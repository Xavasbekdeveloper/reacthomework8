import React, { memo, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api";
import "./details.scss";

const Details = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="details">
      <div className="container">
        <h1 className="details__title">Shop Item</h1>
        <div className="details__card">
          <div className="details__card__left">
            <img src={data.thumbnail} alt={data.title} />
          </div>
          <div className="details__card__right">
            <h3 className="details__card__title">{data.title}</h3>
            <p className="details__card__text">{data.brand}</p>
            <p className="details__card__text">{data.category}</p>
            <p className="details__card__text">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Details);
