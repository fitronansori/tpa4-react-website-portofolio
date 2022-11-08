import React from "react";
import "../styles/header.css";
import Profile from "..//assets/profile.png";

const Header = () => {
  return (
    <div>
      <header
        className="container bg-dange text-dark"
        style={{ height: "88.7vh" }}
      >
        <div className="row h-100">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
            <h1 className="fw-bold" style={{ fontSize: "2rem" }}>
              Hello, I'm Fitron Ansori
            </h1>
            <p className="lead"> I'm a Frontend Developer</p>
            <a className="button" href="#" role="button">
              Contact Me
            </a>
          </div>
          <div className="col-md-6">
            <img src={Profile} alt="" className="img-fluid h-100 w-100" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
