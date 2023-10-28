import React from "react";
import "./Footer.scss";
import twitter from "../../img/twitter.png";
import facebook from "../../img/facebook.png";
import linkedin from "../../img/linkedin.png";
import pinterest from "../../img/pinterest.png";
import instagram from "../../img/instagram.png";
import english from "../../img/language.png"
import coin from "../../img/coin.png"
import access from "../../img/accessibility.png"
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics and Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Buisness</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics and Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Buisness</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics and Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Buisness</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics and Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Buisness</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics and Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Buisness</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
        <div className="left">
        <h2>freelancer</h2>
        <span>Freelancer International Ltd. 2023</span>
        </div>
        <div className="right">
        <div className="social">
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={linkedin} alt="" />
        <img src={pinterest} alt="" />
        <img src={instagram} alt="" />
        
        </div>
        <div className="link">
        <img src={english} alt="" />
        <span>English</span>
        </div>
        <div className="link">
        <img src={coin} alt="" />
        <span>USD</span>
        </div>
        <img src={access} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
