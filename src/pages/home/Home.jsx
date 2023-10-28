import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import check from "../../img/check.png";
import man from "../../img/man-1.jpg";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/projectCard";
import { cards } from "../../data";
import { projects } from "../../data";
const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} wheelScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="https://youtu.be/DKs6nOcl5Ws" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>freelncer buisness</h1>
            <h1>A buisness solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with toots and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src={check} alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src={check} alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src={check} alt="" />
              Connect to freelancers with proven business experience
            </div>
            <button>Explore fiverr buisness</button>
          </div>
          <div className="item">
            <img src={man} alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} wheelScroll={4}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
