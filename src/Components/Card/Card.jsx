import React from "react";
import "./Card.css";

const Card = ({ img, detail, date }) => {
  return (
    <div className="card">
      <div className="content">
        <img src={img} alt="" />
        <span>{detail}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Card;
