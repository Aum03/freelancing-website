import React, { useEffect } from "react";
import "./Gig.scss";
import star from "../../img/star.png";
import dog from "../../img/dog.webp";
import like from "../../img/like.png";
import Slider from "infinite-react-carousel";
import dislike from "../../img/dislike.png";
import us from "../../img/accessibility.png";
import clock from "../../img/clock.png";
import recycle from "../../img/recycle.png";
import gc from "../../img/greencheck.png";
const Gig = () => {

 
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrums">
            Fiverr {">"} Graphics & Design {">"}
          </span>
          <h1>I will create AI generated art for you</h1>
          <div className="user">
            <img src={dog} alt="" className="pp" />
            <span>John Doe</span>
            <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} wheelScroll={1} className="slider">
            <img src={dog} alt="" className="dog" />
            <img src={dog} alt="" className="dog" />
            <img src={dog} alt="" className="dog" />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            i use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I •ve found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. hyports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague wilt allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. Att of the images I create are originat and wilt be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>

          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img src={dog} alt="" className="pp" />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Ciaran, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src={dog} alt="" className="pp" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src={us} alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Itt be using on Fiverr. Comunication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recomend this
                gig, and know already that Itt be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful ?</span>
                <img src={like} alt="" />
                <span>Yes</span>
                <img src={dislike} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src={dog} alt="" className="pp" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src={us} alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Itt be using on Fiverr. Comunication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recomend this
                gig, and know already that Itt be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful ?</span>
                <img src={like} alt="" />
                <span>Yes</span>
                <img src={dislike} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src={dog} alt="" className="pp" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src={us} alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Itt be using on Fiverr. Comunication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recomend this
                gig, and know already that Itt be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful ?</span>
                <img src={like} alt="" />
                <span>Yes</span>
                <img src={dislike} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.9</h2>
          </div>
          <p>
            I wilt create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src={clock} />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src={recycle} />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="feature">
            <div className="item">
              <img src={gc} alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src={gc} alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src={gc} alt="" />
              <span>Prompt Writing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
