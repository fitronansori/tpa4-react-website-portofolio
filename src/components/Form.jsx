import React, { useState, useRef } from "react";
import bg3 from "../assets/bg3.png";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4fjtegm",
        "template_911w1oo",
        formRef.current,
        "KfQh4NlvEOhZysF-W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
          // clear form
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1 className="my-3 text-center">Contact</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={bg3} alt="" className="img-fluid h-h-75 w-75" />
          </div>
          <div className="col-md-6">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="inputname" className="form-label">
                  Name
                </label>
                {/* <input type="text" className="form-control" id="inputname" /> */}
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  placeholder="Name"
                  name="user_name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="inputsubject" className="form-label">
                  Subject
                </label>
                {/* <input type="text" className="form-control" id="inputemail1" /> */}
                <input
                  type="text"
                  className="form-control"
                  id="inputsubject"
                  placeholder="Subject"
                  name="user_subject"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="inputemail1" className="form-label">
                  Email
                </label>
                {/* <input type="text" className="form-control" id="inputemail1" /> */}
                <input
                  type="text"
                  className="form-control"
                  id="inputemail1"
                  placeholder="Email"
                  name="user_email"
                />
              </div>

              <div className="mb-3">
                {/* <div>
                  <textarea
                    className="form-control"
                    placeholder="Type your message here"
                    id="Textarea2"
                    style={{ height: "180px" }}
                  ></textarea>
                </div> */}
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Type your message here"
                  name="message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <span className="ms-2 text-success">
                {message && "Thank You..."}
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
