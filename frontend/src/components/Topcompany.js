import React from "react";
import companylogo from "../assets/images/brand-1.webp";
import logo from "../assets/images/Logo.png";
import Slider from "react-slick";

const brands = [
  companylogo,
  logo,
  companylogo,
  companylogo,
  companylogo,
  companylogo,
  companylogo,
];

function Topcompany() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    swipe: false,
    draggable: false,
  };

  return (
    <div className="top-compny">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="company-box">
              <Slider {...settings}>
                {brands &&
                  brands.map((item, index) => {
                    return (
                      <div
                        className="company-img"
                        key={index}
                        data-attr={index}
                      >
                        <img src={item} alt={item} className="img-fluid " />
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topcompany;
