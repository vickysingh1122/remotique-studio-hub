import React from "react";
import logo from "../assets/images/Logo.png";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="footer__left">
              <div className="logo d-flex align-items-center">
                <a
                  href="./index.html"
                  className="d-flex align-items-center text-decoration-none "
                >
                  <img src={logo} alt="site-logo" className="w-50"/>
                  {/* <span>Henry</span> */}
                </a>
              </div>

              <div className="heading__1 d-flex align-items-center mt__40">
                <h2>Start</h2>
                <h6>Do you have project in mind?</h6>
              </div>

              <h2 className="heading__2">a project</h2>
            </div>
          </div>
          <div className="col-md-5 mt-5 mt-md-0">
            <div className="footer_right">
              <div className="row">
                <div className="col-4 col-md-4 d-flex align-items-end align-items-md-start">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">My Team</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">FAQs</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Contact</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">What I Do</a>
                    </li>
                  </ul>
                </div>
                <div className="col-4 col-md-4 d-flex align-items-end align-items-md-start">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">About</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Services</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Get in touch</a>
                    </li>
                  </ul>
                </div>
                <div className="col-4 col-md-4 d-flex align-items-end align-items-md-start">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">News</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Products</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Portfolio</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contact mt__64">
                <address>
                  <span className="me-3">henry@gmail.com</span>
                  <span>. + 784549 4981 00</span>
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="working__profile text-center mt__100">
          <div className="row">
            <div className="col-3 col-md-3">
              <div className="single__profile playfair__style">
                <a href="javascript:void(0)">Facebook</a>
              </div>
            </div>
            <div className="col-3 col-md-3">
              <div className="single__profile playfair__style">
                <a href="javascript:void(0)">Twitter</a>
              </div>
            </div>
            <div className="col-3 col-md-3">
              <div className="single__profile playfair__style">
                <a href="javascript:void(0)">Behance</a>
              </div>
            </div>
            <div className="col-3 col-md-3">
              <div className="single__profile border-0 playfair__style">
                <a href="javascript:void(0)">Dribble</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
