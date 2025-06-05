import React from "react";
import Slider from "react-slick";

const url = "https://qesafety.com/wp-content/uploads/2025/04/aboutb.webp";

function Banner() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="position-relative">
          <img src={url} alt="Banner image" className="w-100" />
          <div className="intro-caption-holder">
            <div className="intro-caption intro-caption-lg container">
              <h1 className="intro-title">Show Yourself to the World</h1>
              <h2 className="intro-subtitle">
                Build your beautiful portfolio website today!
              </h2>

              <div className="intro-description">
                Aivo – is a complete HTML5 and CSS3 website template. It fits
                perfectly for freelancers, artists and design agencies. It looks
                great with all types of devices.
              </div>

              <div className="intro-buttons">
                <a
                  href="https://themeforest.net/item/aivo-multipurpose-portfolio-html-website-template/21587861?ref=Themetorium"
                  className="btn btn-filled-bg margin-top-5 margin-right-10"
                  target="_blank"
                  data-hover="Buy It Now!"
                >
                  Buy It Now!
                </a>
                <a
                  href="#"
                  className="btn btn-white-bordered margin-top-5"
                  data-hover="Discover More"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <img src={url} alt="Banner image" className="w-100" />
          <div className="intro-caption-holder">
            <div className="intro-caption intro-caption-lg container">
              <h1 className="intro-title">What Are You Waiting For?</h1>
              <h2 className="intro-subtitle">
                Build your beautiful portfolio website today!
              </h2>

              <div className="intro-description">
                Aivo – is a complete HTML5 and CSS3 website template. It fits
                perfectly for freelancers, artists and design agencies. It looks
                great with all types of devices.
              </div>

              <div className="intro-buttons">
                <a
                  href="https://themeforest.net/item/aivo-multipurpose-portfolio-html-website-template/21587861?ref=Themetorium"
                  className="btn btn-filled-bg margin-top-5 margin-right-10"
                  target="_blank"
                  data-hover="Buy It Now!"
                >
                  Buy It Now!
                </a>
                <a
                  href="#"
                  className="btn btn-white-bordered margin-top-5"
                  data-hover="Discover More"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <img src={url} alt="Banner image" className="w-100" />
          <div className="intro-caption-holder">
            <div className="intro-caption intro-caption-lg container">
              <h1 className="intro-title">Start Growing Your Business</h1>
              <h2 className="intro-subtitle">
                Build your beautiful portfolio website today!
              </h2>

              <div className="intro-description">
                Aivo – is a complete HTML5 and CSS3 website template. It fits
                perfectly for freelancers, artists and design agencies. It looks
                great with all types of devices.
              </div>

              <div className="intro-buttons">
                <a
                  href="https://themeforest.net/item/aivo-multipurpose-portfolio-html-website-template/21587861?ref=Themetorium"
                  className="btn btn-filled-bg margin-top-5 margin-right-10"
                  target="_blank"
                  data-hover="Buy It Now!"
                >
                  Buy It Now!
                </a>
                <a
                  href="#"
                  className="btn btn-white-bordered margin-top-5"
                  data-hover="Discover More"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
