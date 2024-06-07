import React from "react";
import "./hero.css";
import StaticPage from "./StaticPage";
import { HiLocationMarker } from "react-icons/hi"; // Correct import
import Countup from "react-countup";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-c" />
            <h1 className="Fonts-1">
              Discover <br />
              Most Suitable <br />
            </h1>
            <h2 className="gradient-text Fonts-2">Property</h2>
            <br />
            <br />
            <br />
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
            <br />
            <br />
          </div>

          <div className="flexCenter search">
            <HiLocationMarker color="var(--blue)" size={25} />{" "}
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <br />
          <br />
          <div className="flexCenter stats">
            <div className="felxColStart  stat">
              <span>
                <Countup start={0} end={8456} duration={5} />
                <span>+</span>
              </span>
              <br />
              <span>Premium Product </span>
            </div>

            <div className="felxColStart stat">
              <span>
                <Countup start={200} end={2000} duration={5} />
                <span>+</span>
              </span>
              <br />
              <span>Happy Customer </span>
            </div>

            <div className="felxColStart stat">
              <span>
                <Countup end={56} duration={5} />
                <span>+</span>
              </span>
              <br />
              <span>Awards </span>
            </div>
          </div>
        </div>
        <div className="hero-right">

          <div className="orange-c2" />
          <div className="image-container">
           <div className="House">
            <StaticPage/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
