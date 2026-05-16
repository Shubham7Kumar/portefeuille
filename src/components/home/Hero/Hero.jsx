// Hero.jsx

import "./Hero.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaGlobe,
} from "react-icons/fa";

import { BsStars } from "react-icons/bs";

import { useEffect, useRef } from "react";

import gsap from "gsap";

const Hero = () => {

  const heroRef = useRef();

  useEffect(() => {

  gsap.set([
    ".hero-badge",
    ".hero-title",
    ".hero-description",
    ".hero-buttons > *",
    ".stat-card",
  ], {
    opacity: 1,
  });

  const tl = gsap.timeline();

  tl.from(".hero-badge", {
    y: 30,
    opacity: 0,
    duration: 0.8,
  })

  .from(".hero-title", {
    y: 60,
    opacity: 0,
    duration: 1,
  }, "-=0.4")

  .from(".hero-description", {
    y: 40,
    opacity: 0,
    duration: 0.8,
  }, "-=0.5")

  .from(".hero-buttons > *", {
    y: 20,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6,
  }, "-=0.4");

}, []);
  return (

    <section
      className="hero-section"
      ref={heroRef}
    >

      {/* BACKGROUND */}

      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container-custom hero-container">

        {/* LEFT SIDE */}

        <div className="hero-left">

          {/* BADGE */}

          <div className="hero-badge">

            <BsStars size={15} />

            <span>
              FULL STACK DEVELOPER
            </span>

          </div>

          {/* TITLE */}

          <h1 className="hero-title">

            Building
            <span> Premium </span>

            Digital Products
            <br />

            For The Modern Web

          </h1>

          {/* DESCRIPTION */}

          <p className="hero-description">

            I craft scalable backend systems,
            modern frontend interfaces and
            immersive user experiences using
            cutting-edge web technologies.

          </p>

          {/* BUTTONS */}

          <div className="hero-buttons">

            <button className="primary-btn">

              View Projects

              <FaArrowRight size={15} />

            </button>

            <button className="secondary-btn">

              Contact Me

            </button>

          </div>

          {/* STATS */}

          <div className="hero-stats">

            <div className="stat-card">

              <h3>5+</h3>

              <p>Projects Built</p>

            </div>

            <div className="stat-card">

              <h3>MERN</h3>

              <p>Modern Stack</p>

            </div>

            <div className="stat-card">

              <h3>Fast</h3>

              <p>Optimized Apps</p>

            </div>

          </div>

          {/* SOCIAL LINKS */}

          <div className="hero-socials">

            <a href="/">

              <FaGithub size={18} />

            </a>

            <a href="/">

              <FaLinkedinIn size={18} />

            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-right">

          <div className="hero-image-wrapper">

            {/* ORBITS */}

            <div className="orbit orbit-1"></div>

            <div className="orbit orbit-2"></div>

            {/* MAIN CARD */}

            <div className="developer-card">

              <div className="dev-top">

                <div className="dev-avatar">
                  S
                </div>

                <div>

                  <h4>
                    Shubham Kumar
                  </h4>

                  <p>
                    Full Stack Engineer
                  </p>

                </div>

              </div>

              {/* CODE WINDOW */}

              <div className="code-window">

                <div className="window-header">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>

                <div className="code-lines">

                  <p>
                    const developer = {"{"}
                  </p>

                  <p>
                    &nbsp;&nbsp;name:
                    "Shubham",
                  </p>

                  <p>
                    &nbsp;&nbsp;stack:
                    ["React", "Node"],
                  </p>

                  <p>
                    &nbsp;&nbsp;focus:
                    "Scalable Apps",
                  </p>

                  <p>
                    &nbsp;&nbsp;passion:
                    "Innovation"
                  </p>

                  <p>
                    {"}"}
                  </p>

                </div>

              </div>

            </div>

            {/* FLOATING CARDS */}

            <div className="floating-card card-1">

              <FaCode size={16} />

              <span>
                Frontend
              </span>

            </div>

            <div className="floating-card card-2">

              <FaDatabase size={16} />

              <span>
                Backend
              </span>

            </div>

            <div className="floating-card card-3">

              <FaGlobe size={16} />

              <span>
                Deployment
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;