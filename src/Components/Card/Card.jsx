import React from "react";
import "./Card.css";

const Card = ({ img, detail, date }) => {
  return (
    <div className="posts">
      <div className="post">
        <img src={img} alt="" />
        <div className="contains">
          <span>{detail}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
