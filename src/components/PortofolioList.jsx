import axios from "axios";
import React, { useEffect, useState } from "react";

const PortofolioList = () => {
  const [portofolio, setPortofolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://634ce2e2f5d2cc648e96b729.mockapi.io/Blog")
      .then((res) => {
        setPortofolio(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="title my-3 text-center">Portofolio</h1>
      <div className="container">
        <div className="row">
          {loading ? (
            <h3 className="text-center">Loading...</h3>
          ) : (
            portofolio.map((item) => {
              return (
                <div className="col-md-4 mb-3" key={item.id}>
                  <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <a href="#" className="btn btn-primary">
                        Go To Link
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

export default PortofolioList;
