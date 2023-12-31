import React, { useEffect } from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";
const catCard = ({ item }) => {
  
  return (
    <Link to="/gigs?cat=design">
    <div className="catCard">
    <img src={item.img} alt="" />
    <div className="desc">{item.desc} </div>
    <div className="title">{item.title}</div>
  </div>
  </Link>
  
  );
};

export default catCard;
