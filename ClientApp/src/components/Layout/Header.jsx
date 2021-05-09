import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../images/icons/search-box.svg"
import { ReactComponent as HamburgerIcon } from "../../images/icons/hamburger.svg"
import { ReactComponent as LoginIcon } from "../../images/icons/login.svg"
import logo from "../../images/logo.png"
import "./header.css"
import { useLanguage } from "../../hooks/useLanguage";
import Searchbar from "../utils/Searchbar";
import { IconButton } from "@material-ui/core";

const Header = () => {
  const { language,setEnglish,setArabic,english,arabic } = useLanguage()
  const data = language.data.header.links;
  const [open,setOpen] = useState(false);

  const onChange = (e)=>{
    if(e.target.checked) setEnglish();
    else setArabic()
  }
  return (
    <>
    <header className="header" data-class="sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light header-wrapper">
          <Link className="navbar-brand header-logo" to="/">
            <img width={250}
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
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0 header-menu">
              <li
                className="nav-item header-link"
              >
                <Link className="nav-link" to="/">
                  {data.home}
                </Link>
              </li>
              <li className="nav-item header-link">
                <Link className="nav-link" to="/auctions">
                  {data.view_acutions}
                </Link>
              </li>
              <li className="nav-item header-link">
                <Link className="nav-link" to="/contact">
                  {data.contact_us}
                </Link>
              </li>
              <li className="nav-item header-link">
                <Link className="nav-link" to="/terms">
                  {data.terms}
                </Link>
              </li>
              <li className="nav-item header-link">
                <Link className="nav-link" to="/policy">
                  {data.policy}
                </Link>
              </li>
            </ul>
            {/**/}
            <ul className="navbar-nav header-other ng-star-inserted">
              <li className="nav-item active d-md-inline-block">
                <div className="nav-link">
                  <input onChange={onChange} checked={language.id_ === english.id_} type="checkbox" id="lan" className="lol-checkbox" /><label className="button" for="lan"><div className="knob"></div><div className="subscribe">{arabic.shorthand}</div><div className="alright">{english.shorthand}</div></label>
                  <span> {language.name} </span>
                </div>
              </li>
              <li className="nav-item">
                <IconButton
                  role="button"
                  component={Link}
                  to="/login"
                >
                  <LoginIcon width={20} />
                </IconButton>
              </li>
              <li className="nav-item">
                <IconButton
                  role="button"
                  onClick={()=> setOpen(true)}
                >
                  <SearchIcon width={20} />
                </IconButton>
              </li>
            </ul>
            {/**/}
          </div>
        </nav>
      </div>
    </header>
    <Searchbar open={open} onClose={()=> setOpen(false)} />
    </>
  );
};

export default Header;
