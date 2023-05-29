import React, { useState } from "react";
import { ApiSlides } from "../../ApiFol/SliderApi";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import './Slider.css'
const Slider = () => {
  //slide useState Hook
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  const backSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className="slider">
      <div className="arrow">
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={backSlide} />
      </div>
      {/*slides*/}
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div className="slide">
              <img className="mover" src={slide.src} alt="first" />
            </div>
          );
        }
      })}
      <div className="arrow">
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
