import "./Navbar.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-custom">

      <div className="container-custom navbar-container">

        {/* LOGO */}
        <div className="logo">

          <span className="logo-circle">S</span>

          <div className="logo-text">
            <h3>Shubham Kumar</h3>
            <p>Full Stack Developer</p>
          </div>

        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <a href="#about">
              About
            </a>
          </li>

          <li>
            <a href="#projects">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

          {/* MOBILE BUTTON */}
          <button className="mobile-btn">
            Hire Me
          </button>

        </ul>

        {/* RIGHT SIDE */}
        <div className="navbar-right">

          <div className="social-icons">

            <a href="https://github.com/Shubham7Kumar">
              <FaGithub />
            </a>

            <a href="www.linkedin.com/in/shubham-kumar-74302a262">
              <FaLinkedinIn />
            </a>

          </div>

          <button className="hire-btn">
            Hire Me
          </button>

          {/* MOBILE MENU */}
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {
              menuOpen
                ? <FaTimes />
                : <FaBars />
            }

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;