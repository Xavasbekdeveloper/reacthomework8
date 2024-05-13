import React from "react";
import { useNavigate } from "react-router-dom";
import "./notFound.scss";
import { memo } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notFound">
      <span>404</span>
      <span>NOT FOUND</span>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default memo(NotFound);
