import axios from "axios";
import "../styles/portolist.css";
import React, { useEffect, useState } from "react";

const PortofolioList = () => {
  const [portofolio, setPortofolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://634ce2e2f5d2cc648e96b729.mockapi.io/Portofolio")
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
                    <img
                      src={item.image}
                      className="card-img-top img-fluid"
                      alt="..."
                      style={{ height: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-3">{item.title}</h5>
                      <a href={item.link} className="button-porto">
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
