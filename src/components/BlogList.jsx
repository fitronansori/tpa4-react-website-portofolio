import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/bloglist.css";

const BlogList = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://634ce2e2f5d2cc648e96b729.mockapi.io/Blog")
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1 className="title my-3 text-center">Blog</h1>
      <div className="container">
        <div className="row">
          {loading ? (
            <h3 className="text-center">Loading...</h3>
          ) : (
            blog.map((item) => {
              return (
                <div className="col-md-4 mb-3" key={item.id}>
                  <div className="card">
                    <img
                      src={item.image}
                      className="card-img-top img-fluid"
                      alt="..."
                      style={{ height: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.post}</p>
                      <a href={item.link} className="btn-blog" target="_blank">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default BlogList;
