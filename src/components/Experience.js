import React from "react";

const Experience = () => {
  const experiences = [
    {
      icon: "fab fa-python",
      title: "Python Developer",
      description:
        "Backend applications, automation scripts, and data processing solutions leveraging the Python ecosystem.",
    },
    {
      icon: "fas fa-brain",
      title: "Machine Learning Engineer",
      description:
        "Design and implement AI models with deep learning frameworks and scalable AI pipelines.",
    },
    {
      icon: "fas fa-code",
      title: "Full-Stack Web Developer",
      description:
        "Build responsive, user-centric web applications using modern frontend and backend technologies.",
    },
    {
      icon: "fab fa-java",
      title: "Java Developer",
      description:
        "Enterprise-grade application development focused on scalable, object-oriented architectures.",
    },
  ];

  return (
    <section id="experience" className="work-experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="card-icon">
                <i className={exp.icon}></i>
              </div>
              <h3>{exp.title}</h3>
              <p className="experience-desc">{exp.description}</p>
              <a href="#" className="exp-btn">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
