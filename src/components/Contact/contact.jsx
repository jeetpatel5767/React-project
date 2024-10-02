import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2"; // Correct import path
import "./contact.css";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="c-container paddings innerWidth flexCenter">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to Contact</span>
          <span className="secondaryText">
            We always ready to help by providing the best service. We believe a
            good place to live can make your life better.
          </span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaruText">+91 7778905767</span>
                  </div>
                </div>
                <div className="flexCenter button">CALL NOW</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaruText">+91 7778905767</span>
                  </div>
                </div>
                <div className="flexCenter button">CHAT NOW</div>
              </div>
            </div>

            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"> video Call</span>
                    <span className="secondaruText">+91 7778905767</span>
                  </div>
                </div>
                <div className="flexCenter button"> VIDEO CALL NOW</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaruText">+91 7778905767</span>
                  </div>
                </div>
                <div className="flexCenter button">MESSAGE NOW</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="image">
            <img src="./contact.jpg" alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
