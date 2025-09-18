import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Machine Learning Pipeline",
      description:
        "Developed a complete ML pipeline incorporating automated data preprocessing, model training with TensorFlow, and deployment within Docker containers on Linux servers.",
      githubUrl: "https://github.com/yourusername/ml-pipeline",
      demoUrl: "https://your-ml-demo.herokuapp.com",
      reverse: false,
    },
    {
      title: "Linux System Monitor",
      description:
        "Created an intuitive system monitoring tool with real-time metrics tracking, alerting capabilities, and a clean web interface built using modern JavaScript technologies.",
      githubUrl: "https://github.com/yourusername/linux-system-monitor",
      demoUrl: "https://your-monitor-demo.netlify.app",
      reverse: true,
    },
  ];

  const ProjectPreview = () => (
    <div className="project-preview">
      <div className="preview-content">
        <div className="preview-header">
          <div className="preview-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="preview-body">
          <div className="code-line"></div>
          <div className="code-line short"></div>
          <div className="code-line"></div>
          <div className="code-line medium"></div>
          <div className="code-line"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item ${project.reverse ? "reverse" : ""}`}
          >
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  title="View Source Code"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  title="Live Demo"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="project-image">
              <ProjectPreview />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
