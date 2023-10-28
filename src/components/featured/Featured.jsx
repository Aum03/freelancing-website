import React from "react";
import "./Featured.scss";
import search from "../../img/search.png";
import man from "../../img/man.png";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect <i>freelance</i> services for you</h1>
          <div className="search">
            <div className="searchInput">
              <img src={search} alt="" className="search" />
              <input type="text" placeholder="Try Building a Website" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular :</span>
            <button>Web Designs</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
        <img src={man} className="man" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
