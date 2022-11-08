import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import PortofolioList from "../components/PortofolioList";
import BlogList from "../components/BlogList";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <div className="my-lg-5">
        <PortofolioList />
      </div>
      <div className="my-lg-5">
        <BlogList />
      </div>
      <div className="my-lg-5">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
