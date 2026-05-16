import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { projects } from "../../../data/projects";

import "./projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">

      {/* CINEMATIC BACKGROUND */}
      <div className="cinema-noise"></div>
      <div className="stage-beam left"></div>
      <div className="stage-beam right"></div>

      <div className="container-custom">

        <SectionHeading
          subtitle="FEATURED WORK"
          title="Projects In Production"
        />

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              {/* TOP STRIP */}
              <div className="project-top">

                <div className="project-count">
                  0{index + 1}
                </div>

                <div className="project-type">
                  {project.type}
                </div>

              </div>

              {/* MAIN CONTENT */}
              <div className="project-body">

                <div className="project-overlay"></div>

                <div className="project-content">

                  <h2>{project.title}</h2>

                  <p>
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="tech-stack">

                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex}>
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* CREDENTIALS */}
                  {project.credentials && (
                    <div className="project-credentials">

                      <div className="credential-title">
                        Demo Credentials
                      </div>

                      <div className="credential-box">

                        <span>
                          <strong>Email:</strong>{" "}
                          {project.credentials.email}
                        </span>

                        <span>
                          <strong>Password:</strong>{" "}
                          {project.credentials.password}
                        </span>

                      </div>

                    </div>
                  )}

                  {/* ROUTES */}
                  {project.routes && (
                    <div className="project-routes">

                      <div className="routes-title">
                        API Endpoints
                      </div>

                      <div className="routes-list">

                        {project.routes.map((route, routeIndex) => (
                          <div
                            className="route-item"
                            key={routeIndex}
                          >

                            <div className="route-header">

                              <span className={`method ${route.method.toLowerCase()}`}>
                                {route.method}
                              </span>

                              <span className="path">
                                {route.path}
                              </span>

                            </div>

                            <p>
                              {route.description}
                            </p>

                          </div>
                        ))}

                      </div>

                    </div>
                  )}

                </div>

              </div>

              {/* FOOTER */}
              <div className="project-footer">

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  Launch Project
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;