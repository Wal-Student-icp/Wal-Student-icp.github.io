import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";

const navLinks = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Resume",
    link: "/resume",
  },
  {
    name: "Works",
    link: "/works",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const NavigationBar = () => {
  const [navbar, setNavbar] = useState(false);

  const HandleNavbarScroll = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", HandleNavbarScroll);
  return (
    <>
      <nav
        className={
          navbar
            ? "navbar navbar-expand-lg navbar-light sticky-top NavRow navbarBg"
            : "navbar navbar-expand-lg navbar-light sticky-top NavRow "
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand NavbarBrand" to="home">
            <img
              src="images/logo.png"
              alt="Logo"
              width={"80px"}
              height={"60px"}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navLinks.map((l, index) => {
                const { name, link } = l;
                return (
                  <li className="nav-item" id="about" key={index}>
                    <NavLink className="nav-link" to={link}>
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
