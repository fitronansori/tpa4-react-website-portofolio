import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3" id="nav-container">
        <div className="container">
          <span className="navbar-brand logo">Fitron Ansori</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav item-link gap-4 text-center">
              <Link className="nav-item text-decoration-none" to={"/"}>
                <span className="item-link">Home</span>
              </Link>

              <Link className="nav-item text-decoration-none" to={"/about"}>
                <span className="item-link"> About</span>
              </Link>

              <Link
                className="nav-item text-decoration-none"
                to={"/portofolio"}
              >
                <span className="item-link">Portofolio</span>
              </Link>

              <Link className="nav-item text-decoration-none" to={"/blogs"}>
                <span className="item-link">Blogs</span>
              </Link>

              <Link className="nav-item text-decoration-none" to={"/contact"}>
                <span className="item-link">Contact</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
