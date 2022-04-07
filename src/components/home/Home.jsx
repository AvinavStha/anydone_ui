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
            <p className="proactive-text">
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
          <div className="proactive-image">
            <img
              className="simplify-img"
              src={simplifyWork}
              alt="simplifyWork"
            />
          </div>
          <div className="proactive">
            <p className="content-title">Proactive Solutions</p>
            <p className="proactive-text">
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
        </div>
      </section>

      <section>
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-md-12 col-lg-4 order-2 order-lg-1 text-center">
            <img className="simplify" src={simplifyWork} alt="simplifyWork" />
          </div>
          <div className="col-md-12 col-lg-7 order-1 order-lg-2">
            <div className="d-flex flex-column align-items-center align-items-lg-start px-2 px-md-4">
              <h1 className="text-title color-header mb-1 mb-md-5">
                <b>Simplify Work</b>
              </h1>
            </div>
            <div className="simply-quote-label d-flex flex-column  align-items-center align-items-lg-start px-9 px-md-6">
              <p className="text-quote mb-3 text-center text-lg-left simplify-quote-label">
                <b>
                  {" "}
                  "Satisfying every customer can be challenging. But, with "
                  <span className="color">
                    <b>Anydone Desk</b>
                  </span>
                  , we help you break that ice.
                </b>
              </p>
              <p className=" paragraph mb-4 text-desc-sm font-weight color-description	text-center text-lg-left home-subtext">
                Let the AI-powered bots handle conversational and personalized
                customer support while your agents can focus on quality service.
              </p>
              <a
                className=" arrow btn cta-button-outline	cta-button-primary_rounded f-sm mb-5 mb-lg-0"
                href="features.html"
              >
                Learn more
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-10 h-100 align-items-center justify-content-center">
          <div className="col-md-12 col-lg-7 order-1">
            <div className="d-flex flex-column align-items-center align-items-lg-start px-2 px-md-4">
              <h1 className="text-title color-header mb-2 mb-md-6">
                <b>Save Time</b>
              </h1>
            </div>

            <div className="d-flex	flex-column	align-items-center align-items-lg-start	px-8 px-md-5">
              <p className="text-quote-save mb-2 font-weight text-center text-lg-left save-time-quote-label">
                <b>
                  {" "}
                  "Highly responsive and"{" "}
                  <span className="dolor">
                    <b>ERRORLESS</b>
                  </span>{" "}
                  customer service at your fingertips.
                </b>
              </p>
              <p className=" paragraph mb-4 text-desc-sm font-weight  color-description  text-center text-lg-left   home-subtext">
                Give your customers the gift of time and prompt support with
                real-time solution bots (answer bots and resolution bots).
              </p>
              <a
                className=" arrow btn cta-button-outline	cta-button-primary_rounded f-sm mb-5 mb-lg-0"
                href="features.html"
              >
                Learn more
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </a>
            </div>
          </div>

          <div className="col-md-12 col-lg-4 order-2 text-center">
            <img className="saveTime" src={saveTime} alt="saveTime" />
          </div>
        </div>

        <div className="row h-100 align-items-center justify-content-center">
          <div className="col">
            <div className=" sidebar d-flex flex-column align-items-center px-md-5">
              <h1 className=" text-banner cta-area-top-label color-header	text-center	px-4">
                Customers look for solutions, a rather permanent one.
              </h1>
              <h1 className=" text-banner color-heade	text-center	mb-4">
                Anydone Desk helps you build a conversational bridge to fill the
                gap.
              </h1>

              <div className="pricing-btn-group">
                <a
                  className=" button
									btn btn-primary cta-button-primary_rounded
										cta-button-primary_lg cta-button-primary_rounded_lg
										text-uppercase
										mb-0 mb-sm-0
										mt-2 pl-20
									"
                  href="#"
                >
                  Try Now
                </a>

                <a
                  className="button1
										btn btn-outline-primary
										btn-primary-rounded_lg
										text-uppercase
										mb-0 mb-sm-0
										mt-2 pl-40 pr-20"
                  href="#"
                  data-mdb-ripple-color="dark"
                  onclick="openVideo()"
                >
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
