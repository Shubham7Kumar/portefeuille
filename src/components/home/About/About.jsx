import { useFadeUp } from "../../../hooks/useFadeUp";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import img from "../../../assets/MyPic.jpeg";
import "./About.css";

const About = () => {
  const aboutRef = useFadeUp();

  return (
    <section className="about-section" ref={aboutRef} id="about">
      <div className="container-custom">
        
        <SectionHeading
          subtitle="ABOUT ME"
          title="Passionate Full Stack Developer"
        />

        <div className="row align-items-center g-5">

          {/* IMAGE */}
          <div className="col-lg-5">
            <div className="about-image">
              <img src={img} alt="About" className="image" />

              <div className="floating-badge">
                <span>Full Stack Developer</span>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-lg-7">
            <div className="about-content">

              <div className="about-line"></div>

              <p>
                I build scalable and high-performance web
                applications using modern frontend and backend
                technologies.
              </p>

              <p>
                My focus is creating responsive, visually engaging
                interfaces while maintaining clean architecture,
                optimized performance and reusable code.
              </p>

              <div className="about-stats">

                <div className="stat-card">
                  <h3>5+</h3>
                  <span>Projects</span>
                </div>

                <div className="stat-card">
                  <h3>2+</h3>
                  <span>Years Learning</span>
                </div>

                <div className="stat-card">
                  <h3>Full Stack</h3>
                  <span>Development</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;