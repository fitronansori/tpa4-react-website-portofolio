import React from "react";
import bg3 from "../assets/bg3.png";

const Form = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={bg3} alt="" className="img-fluid h-h-75 w-75" />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="inputname" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="inputname" />
              </div>

              <div className="mb-3">
                <label htmlFor="inputemail1" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputemail1" />
              </div>

              <div className="mb-3">
                <div>
                  <textarea
                    className="form-control"
                    placeholder="Type your message here"
                    id="Textarea2"
                    style={{ height: "180px" }}
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
