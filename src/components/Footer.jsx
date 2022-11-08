import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="py-3 my-4">
          <div className="nav justify-content-center border-bottom pb-3 mb-3 gap-3">
            <Link className="nav-item text-decoration-none" to={"/"}>
              <span className="item-link">Home</span>
            </Link>

            <Link className="nav-item text-decoration-none" to={"/about"}>
              <span className="item-link"> About</span>
            </Link>

            <Link className="nav-item text-decoration-none" to={"/portofolio"}>
              <span className="item-link">Portofolio</span>
            </Link>

            <Link className="nav-item text-decoration-none" to={"/blogs"}>
              <span className="item-link">Blogs</span>
            </Link>

            <Link className="nav-item text-decoration-none" to={"/contact"}>
              <span className="item-link">Contact</span>
            </Link>
          </div>
          <p className="text-center text-muted">&copy; 2022 Fitron Ansori</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
