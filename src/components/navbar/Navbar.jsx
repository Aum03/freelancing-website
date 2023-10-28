import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">
            <span className="text">freelancer</span>
            <span className="dot">.</span>
          </div>
        </Link>

        <div className="links">
          <span>Freelancing Buisness</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <span>{currentUser.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link to="/mygigs" className="link">
                        {" "}
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        {" "}
                        Add New Gigs
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    Orders{" "}
                  </Link>
                  <Link to="/messages" className="link">
                    Messages{" "}
                  </Link>
                  <Link to="/" className="link">
                    Logout{" "}
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />

          <div className="menu">
            <Link to="/" className="link">
              Graphics & Design
            </Link>
            <Link to="/" className="link">
              Video & Animation
            </Link>
            <Link to="/" className="link">
              Writing & Translation
            </Link>
            <Link to="/" className="link">
              AI Services
            </Link>
            <Link to="/" className="link">
              Digital Marketing
            </Link>
            <Link to="/" className="link">
              Music and Audio
            </Link>
            <Link to="/" className="link">
              Programming & Tech
            </Link>
            <Link to="/" className="link">
              Buisness
            </Link>
            <Link to="/" className="link">
              Lifestyle
            </Link>
          </div>
        </>
      )}

     
    </div>
  );
};

export default Navbar;
