import { Paper } from "@material-ui/core";
import React from "react";
import { Fade, Roll } from "react-reveal";
import Tada from "react-reveal/Tada";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <Paper component="footer" elevation={4} className="py-5 mt-4">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3 px-0">
                <Fade left>
                  <img src={logo} alt="picky-mango" className="w-100" />
                </Fade>
              </div>
            </div>
          </div>
          <div className="w-100 my-4" />
          <div className="col-lg-2">
            <Fade left>
              <h6>
                <b>Love The Hustle.</b>
              </h6>
              <p
                className="text-dark-50 font-weight-bold"
                style={{ fontSize: "0.7rem" }}
              >
                © 2020 ECONOMICA Inc. <br /> All Rights Reserved
              </p>
            </Fade>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="font-weight-bold">
                  <Roll cascade left>
                    We collaborate with ambitious businesses and people; let's
                    build something great together
                  </Roll>
                </h4>
              </div>
              <div className="w-100 my-4" />
              <div className="col-lg-4 col-6 my-4">
                <h6 className="text-dark-50 font-weight-bold">
                  Start a Conversation
                </h6>
                <Tada>
                  <div>
                    <a
                      href="/"
                      className="font-weight-bold footer_link header_link active d-inline-block"
                      style={{ fontSize: "0.9rem" }}
                    >
                      text@example.com
                    </a>
                  </div>
                  <div>
                    <a
                      href="/"
                      className="font-weight-bold footer_link header_link active d-inline-block"
                      style={{ fontSize: "0.9rem" }}
                    >
                      +1 233 456 0789
                    </a>
                  </div>
                </Tada>
              </div>
              <div className="col-lg-4 col-6 my-4">
                <h6 className="text-dark-50 font-weight-bold">
                  Start a Conversation
                </h6>
                <Tada>
                  <div>
                    <a
                      href="/"
                      className="font-weight-bold footer_link header_link active d-inline-block"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Portfolio
                    </a>
                  </div>
                  <div>
                    <a
                      href="/"
                      className="font-weight-bold footer_link header_link active d-inline-block"
                      style={{ fontSize: "0.9rem" }}
                    >
                      2016 YIR
                    </a>
                  </div>
                </Tada>
              </div>
              <div className="col-lg-4 col-12">
                <div className="row text-white-50">
                  <div className="col-12">
                    <h6 className="font-weight-bold mb-4">Contact Us</h6>
                  </div>
                  <div className="w-100" />
                  <div className="col">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </div>
                  <div className="col">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </div>
                  <div className="col">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </div>
                  <div className="col">
                    <i className="fab fa-google-plus-g" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Footer;
