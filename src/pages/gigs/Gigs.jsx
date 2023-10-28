import React, { useEffect, useState } from "react";
import "./Gigs.scss";
import down from "../../img/down.png";
import {gigs} from "../../data"
import GigCard from "../../components/gigCard/GigCard"
const Gigs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const active = () => {
    setOpen(!open);
  };
  const reSort = (type) => {
    setSort(type);
    setOpen(false)
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrums">
          Fiverr {">"} Graphics & Design {">"}
        </span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort == "sales" ? "Best selling" : "Newest"}
            </span>
            <img src={down} alt="" onClick={active} />
            {open && (
              <div className="rightMenu">
                <span onClick={()=>reSort("createdAt")}>Newest</span>
                <span onClick={()=>reSort("sales")}>Best Selling</span>
              </div>
            )}
          </div>
        </div>
              <div className="cards">
                {
                  gigs.map(gig=>(
                    <GigCard  item={gig}  key={gig.id}/>
                  ))
                }

              </div>
      </div>
    </div>
  );
};

export default Gigs;
