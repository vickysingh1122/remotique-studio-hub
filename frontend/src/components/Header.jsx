import React from "react";
import { Link } from "react-router-dom";
import fileCase from "../assets/images/file-case.png";
import infoIcon from "../assets/images/info.png";
import dollarIcon from "../assets/images/dollar.png";
import blogIcon from "../assets/images/blog.png";
import logo from "../assets/images/Logo.png";
import serviceTools from "../assets/images/service-tools.gif";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="desktop-menu second-header">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-2">
              <Link href="#" className="header-logo">
                <img
                  src={logo}
                  className="img-fluid img-responsive"
                />
              </Link>
            </div>

            <div className="col-lg-10">
              <div className="header-nav-box">
                <div className="header-search">
                  <div className="search-icon">
                    <FaSearch />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
                <div className="header-nav-tabs">
                  <ul className="d-flex flex-wrap list-unstyled m-0 p-0">
                    <li>
                      <div className="search-icon">
                        <img
                          src={fileCase}
                          alt="Case Studies"
                          className="img-fluid"
                        />
                      </div>
                      <div className="nav-label ms-2">Case Studies</div>
                    </li>
                    <li>
                      <div className="search-icon">
                        <img src={infoIcon} alt="About" className="img-fluid" />
                      </div>
                      <div className="nav-label ms-2">About</div>
                    </li>
                    <li>
                      <div className="search-icon">
                        <img
                          src={dollarIcon}
                          alt="Pricing"
                          className="img-fluid"
                        />
                      </div>
                      <div className="nav-label ms-2">Pricing</div>
                    </li>
                    <li>
                      <div className="search-icon">
                        <img src={blogIcon} alt="Blog" className="img-fluid" />
                      </div>
                      <div className="nav-label ms-2">Blog</div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="dropdown-hirer ">
                          <div className="search-icon">
                            <img
                              src={serviceTools}
                              alt="Services"
                              className="img-fluid"
                            />
                          </div>
                          <div className="nav-label ms-2">Services</div>
                        </div>
                        <div className="dropdown-arrow ms-2">
                          <FaChevronDown />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="header-cta-btn new-header-cta-btn ms-3">
                        <Link to="/hire-now">Upgrade</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
