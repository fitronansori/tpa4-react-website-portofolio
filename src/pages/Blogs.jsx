import React from "react";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <BlogList />
      <Footer />
    </div>
  );
};

export default Blogs;
