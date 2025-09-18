import React from "react";

const About = () => {
  const skills = {
    technical: ["Python", "Java", "JavaScript", "TypeScript", "Bash", "SQL"],
    frameworks: [
      "React",
      "Node.js",
      "Django",
      "Flask",
      "TensorFlow",
      "PyTorch",
    ],
    tools: ["Linux", "Docker", "Git", "AWS", "PostgreSQL", "MongoDB"],
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I am a dedicated Linux enthusiast and software developer deeply
              committed to open-source technologies and innovative
              problem-solving. My tech journey began with an insatiable
              curiosity about system internals, which blossomed into a lifelong
              passion for Linux and the open-source philosophy.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <h3>
                  <i className="fas fa-code"></i> Development Philosophy
                </h3>
                <p>
                  I focus on writing clean, efficient, and maintainable code,
                  blending classical software engineering principles with
                  cutting-edge development methodologies.
                </p>
              </div>

              <div className="detail-item">
                <h3>
                  <i className="fab fa-linux"></i> Linux Expertise
                </h3>
                <p>
                  With over 5 years of hands-on experience, I am proficient in
                  Linux system administration, shell scripting, and container
                  orchestration technologies including Docker and Kubernetes.
                </p>
              </div>

              <div className="detail-item">
                <h3>
                  <i className="fas fa-brain"></i> AI & Machine Learning
                </h3>
                <p>
                  Driven by an interest in AI/ML, I work extensively with Python
                  libraries such as TensorFlow, PyTorch, and scikit-learn to
                  develop intelligent, data-driven applications.
                </p>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <div className="skills-category">
              <h3>Technical Skills</h3>
              <div className="skills-list">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3>Technologies & Frameworks</h3>
              <div className="skills-list">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3>Tools & Platforms</h3>
              <div className="skills-list">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
