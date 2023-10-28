import React, { Children } from "react";
import Slider from "infinite-react-carousel";

import "./Slide.scss";

const Slide = ({children,slidesToShow,wheelScroll}) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} wheelScroll={wheelScroll}>
       {children}
         
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
