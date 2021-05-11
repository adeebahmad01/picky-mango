import React from "react";
import { ReactComponent as ContactIcon } from "../../images/icons/mail.svg";

const Contact = () => {
  return (
    <div className="height">
      <div className="container round calc_height mt-5">
        <div className="row h-100">
          <div
            style={{ flexDirection: "column" }}
            className="col-lg-6 colored py-4 clipped d-flex justify-content-center align-items-center"
          >
            <ContactIcon height={300} width={300} />
            <br />
            <h1 className="title text-center text-white mt-3">
              Still Making History
            </h1>
          </div>
          <div className="col-lg-6 text-white py-5 position-relative">
            <h1 className="title heading mb-3">Comment Section</h1>
            <p className="title para mb-3">
              Please feel free to provide ANY form of feedback. This can be
              either negative or positive. It is entirely anonymous.
            </p>
            <form id="submit_form" action="/">
              <label htmlFor="message" className="title mb-2">
                Message:
              </label>
              <div style={{ borderRadius: 20 }} className="shadow me-3">
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter username"
                >
                  <textarea
                    type="email"
                    name="email"
                    className="input100 browser-default"
                    required
                    id="id_email"
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="Email"
                  ></span>
                </div>
              </div>
              <div className="mt-4">
                <button className="submit-button state-0">
                  <span className="pre-state-msg">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
