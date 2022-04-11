import React from "react";
import "./home.css";
import homepage from "../../assets/images/homepage.png";
import arrow from "../../assets/images/arrow.png";
import proactiveSolutions from "../../assets/images/proactiveSolutions.png";
import simplifyWork from "../../assets/images/simplifyWork.png";
import saveTime from "../../assets/images/saveTime.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <header className="main-heading">
          <div className="landing">
            <p className="text-header">
              Deliver Exceptional Customer Service <br />
              with Anydone Desk
            </p>
            <h4 className="subtext-header">
              Offer a delightful conversational support that is immediate and
              friendly. Exceed your <br />
              customer’s expectation with Anydone Desk's AI powered support
              system.
            </h4>
            <div className="heading-button">
              <a className="trynow-btn" href="#">
                Try Now
              </a>
              &nbsp;
              <a className="video-btn" href="#" onclick="openVideo()">
                Watch Video
              </a>
            </div>
          </div>
        </header>
      </div>
      <section className="homepage">
        <div className="homepage-img">
          <img src={homepage} alt="homepage" />
        </div>
        <div className="homepage-content">
          <div className="proactive">
            <p className="content-title">Proactive Solutions</p>
            <p className="simplify-text">
              Wouldn't it be
              <span className="color"> AWESOME </span>
              if your problems were Solved before you even realize they existed.
            </p>
            <p className="paragraph">
              Interactively address known customer support issues, resolve, and
              update flutter even before your customers reach you.
            </p>
            <a className="arrow">
              Learn more
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            </a>
          </div>
          <div className="proactive-image">
            <img
              className="proactive-img"
              src={proactiveSolutions}
              alt="proactiveSolutions"
            />
          </div>
        </div>
      </section>

      <section className="homepage">
        <div className="homepage-content">
          <div className="simplify-image">
            <img
              className="simplify-img"
              src={simplifyWork}
              alt="simplifyWork"
            />
          </div>
          <div className="simplify">
            <p className="content-title">Simplify Work</p>
            <p className="simplify-text">
              Satisfying every customer can be challenging. But, with
              <span className="color"> Anydone Desk </span>
              we help you break that ice.
            </p>
            <p className="paragraph">
              Let the AI-powered bots handle conversational and personalized
              customer support while your agents can focus on quality service.
            </p>
            <a className="arrow">
              Learn more
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="homepage">
        <div className="homepage-content">
          <div className="saving">
            <p className="content-title">Save Time</p>
            <p className="saving-text">
              Highly responsive and
              <span className="color"> ERRORLESS </span>
              customer service at your fingertips.
            </p>
            <p className="paragraph">
              Give your customers the gift of time and prompt support with
              real-time solution bots (answer bots and resolution bots).
            </p>
            <a className="arrow">
              Learn more
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            </a>
          </div>
          <div className="saving-image">
            <img className="saving-img" src={saveTime} alt="saveTime" />
          </div>
        </div>
      </section>

      <section>
        <div className="customer-content">
          <div className="customer">
            <div className="customer-title">
              <h1 className="customer-text">
                Customers look for solutions, a rather permanent one. Anydone
                Desk helps you build a conversational bridge to fill the gap.
              </h1>
              <div className="heading-button">
                <a className="trynow-btn" href="#">
                  Try Now
                </a>
                &nbsp;
                <a className="video-btn" href="#" onclick="openVideo()">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
