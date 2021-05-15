import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../images/icons/search-box.svg";
import { ReactComponent as HamburgerIcon } from "../../images/icons/hamburger.svg";
import { ReactComponent as LoginIcon } from "../../images/icons/login.svg";
import logo from "../../images/logo.png";
import "./header.css";
import { useLanguage } from "../../hooks/useLanguage";
import Searchbar from "../utils/Searchbar";
import { Button, IconButton } from "@material-ui/core";
import LanguageSwitch from "../utils/LanguageSwitch";

const Header = () => {
  const { language } = useLanguage();
  const data = language.data.header.links;
  return (
    <>
      <header className="header" data-class="sticky-top">
        <div className="border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <span className="border border-top-0 border-bottom-0 d-inline-block">
                  <Button
                    component={Link}
                    endIcon={<LoginIcon width={15} />}
                    className="px-3 fw-light"
                    to="/login"
                  >
                    Login
                  </Button>
                </span>{" "}
                &nbsp;&nbsp; OR &nbsp;&nbsp;
                <span className="border border-top-0 border-bottom-0 d-inline-block">
                  <Button
                    component={Link}
                    className="px-3 fw-light"
                    to="/login"
                  >
                    SignUp
                  </Button>
                </span>
              </div>
              <div className="col-lg-6 pt-2 d-flex justify-content-end">
                <LanguageSwitch /> &nbsp;
                <span> {language.name} </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light header-wrapper">
              <Link className="navbar-brand header-logo" to="/">
                <img
                  width={200}
                  alt="picky-mango"
                  className="d-inline-block align-top"
                  src={logo}
                />
              </Link>
              <button
                className="navbar-toggler border-0 shadow-none header-burgerbtn"
                type="button"
              >
                <HamburgerIcon fill="var(--color-primary)" width={30} />
              </button>
              <div className="collapse px-3 navbar-collapse">
                <Searchbar />
              </div>
            </nav>
          </div>
        </div>
        <section className="conatiner pt-2">
          <div className="row">
            <div className="col-12">
              <ul className="navbar-nav d-flex justify-content-center w-100 flex-row mx-auto mt-2 mt-lg-0 header-menu">
                <li className="nav-item header-link px-3">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link py-2 d-inline-block"
                    to="/"
                  >
                    {data.home}
                  </NavLink>
                </li>
                <li className="nav-item header-link px-3">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link py-2 d-inline-block"
                    to="/auctions"
                  >
                    {data.view_acutions}
                  </NavLink>
                </li>
                <li className="nav-item header-link px-3">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link py-2 d-inline-block"
                    to="/contact"
                  >
                    {data.contact_us}
                  </NavLink>
                </li>
                <li className="nav-item header-link px-3">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link py-2 d-inline-block"
                    to="/terms"
                  >
                    {data.terms}
                  </NavLink>
                </li>
                <li className="nav-item py-2 header-link">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link"
                    to="/policy"
                  >
                    {data.policy}
                  </NavLink>
                </li>
                <li className="nav-item px-2 header-link">
                  <Button
                    className="fw-light"
                    component={Link}
                    variant="outlined"
                    to="/place-ads"
                  >
                    Place Ads
                  </Button>
                </li>
                <li className="nav-item px-2 header-link">
                  <Button
                    component={Link}
                    className="fw-light"
                    variant="outlined"
                    to="/place-auctions"
                  >
                    Place Auctions
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
