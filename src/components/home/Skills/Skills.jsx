import SectionHeading from "../../common/SectionHeading/SectionHeading";

import { skills } from "../../../data/skills";

import "./Skills.css";

import { useStaggerAnimation } from "../../../hooks/useStaggerAnimation";

const Skills = () => {
  const skillsRef = useStaggerAnimation();

  return (
    <section className="skills-section" ref={skillsRef} id="skills">
      <div className="container-custom">

        <SectionHeading
          subtitle="SKILLS"
          title="Technologies & Engineering Practices"
        />

        <div className="row g-4">

          {skills.map((group, index) => (
            <div
              className="col-lg-6 stagger-item"
              key={index}
            >
              <div className="skill-group-card">

                <div className="skill-group-header">
                  <h3>{group.title}</h3>
                </div>

                <div className="skills-grid">

                  {group.skills.map((skill, idx) => (
                    <div className="skill-pill" key={idx}>
                      {skill}
                    </div>
                  ))}

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;