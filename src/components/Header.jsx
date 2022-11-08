import React from "react";
import "../styles/header.css";
import bg1 from "../assets/bg1.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Profile from "..//assets/profile.png";

const Header = () => {
  return (
    <div>
      <header
        className="container bg-dange text-dark"
        style={{ height: "88.7vh" }}
      >
        <div className="row h-100">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start gap-1">
            <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
              Hello, I'm Fitron Ansori
            </h1>
            <p className="lead">Frontend Developer</p>
            <div className="social-media mb-3">
              <a href="https://github.com/fitronansori" target="_blank">
                <FaGithub className="social-icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/fitron-ansori-b671521b3/"
                target="_blank"
              >
                <FaLinkedinIn className="social-icon" />
              </a>

              <a
                href="https://www.instagram.com/fitronansori.io/"
                target="_blank"
              >
                <FaInstagram className="social-icon" />
              </a>
            </div>
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              <a className="button" role="button">
                Contact Me
              </a>
            </Link>
          </div>
          <div className="col-md-6">
            <img src={bg1} alt="" className="img-fluid h-100 w-100" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
