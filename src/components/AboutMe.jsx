import React from "react";
import "../styles/aboutme.css";
import Profile from "../assets/profile.png";
import { FaCss3Alt, FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const AboutMe = () => {
  return (
    <>
      <div className="container mt-5" id="aboutme">
        <div className="row about-content">
          <div className="col-md-5 text-white d-flex flex-column justify-content-center">
            <img src={Profile} alt="" className="img-fluid h-100 w-100" />
          </div>
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <div className="info-wrapper">
              <h1 className="title text-center">About Me</h1>

              <p className="lead">
                I'm a Frontend Developer, I have a passion for web development
                and I'm always learning new things. I'm currently studying
                Computer Science at University of Bumigora Mataram.
              </p>

              <div className="stack">
                <h5>My Front-End Stack</h5>
                <div className="stack-wrapper">
                  <div className="stack-item">
                    <FaHtml5 className="icon-stack" />
                    <FaCss3Alt className="icon-stack" />
                    <IoLogoJavascript className="icon-stack" />
                    <FaBootstrap className="icon-stack" />
                    <SiTailwindcss className="icon-stack" />
                    <FaReact className="icon-stack" />
                    <SiRedux className="icon-stack" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
