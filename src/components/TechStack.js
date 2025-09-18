import React from "react";

const TechStack = () => {
  const techIcons = [
    { name: "Linux", icon: "fab fa-linux", class: "linux" },
    { name: "Python", icon: "fab fa-python", class: "python" },
    { name: "JavaScript", icon: "fab fa-js-square", class: "javascript" },
    { name: "React", icon: "fab fa-react", class: "react" },
    { name: "Java", icon: "fab fa-java", class: "java" },
    { name: "PostgreSQL", icon: "fas fa-database", class: "database" },
    { name: "Git", icon: "fab fa-git-alt", class: "git" },
    { name: "Docker", icon: "fab fa-docker", class: "docker" },
  ];

  return (
    <section id="tech-stack" className="tech-stack stagger-parent fade-up">
      <div className="container">
        <p className="tech-intro">
          Currently seeking to join a dynamic, cross-functional team dedicated
          to impactful and accessible technology solutions.
        </p>
        <p className="tech-subtitle">Core Technologies</p>
        <div className="tech-icons-container">
          <svg
            className="tech-connections"
            viewBox="0 0 800 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ffa500", stopOpacity: 0.8 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#3776ab", stopOpacity: 0.8 }}
                />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#3776ab", stopOpacity: 0.8 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#f7df1e", stopOpacity: 0.8 }}
                />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#f7df1e", stopOpacity: 0.8 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#61dafb", stopOpacity: 0.8 }}
                />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#61dafb", stopOpacity: 0.8 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ed8b00", stopOpacity: 0.8 }}
                />
              </linearGradient>
              <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ed8b00", stopOpacity: 0.8 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#336791", stopOpacity: 0.8 }}
                />
              </linearGradient>
              <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#336791", stopOpacity: 0.8 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#f05032", stopOpacity: 0.8 }}
                />
              </linearGradient>
            </defs>
            <path
              className="connection-line"
              d="M100 100 Q150 50 200 100"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
            />
            <path
              className="connection-line"
              d="M200 100 Q250 150 300 100"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
            />
            <path
              className="connection-line"
              d="M300 100 Q350 50 400 100"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
            />
            <path
              className="connection-line"
              d="M400 100 Q450 150 500 100"
              stroke="url(#gradient4)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
            />
            <path
              className="connection-line"
              d="M500 100 Q550 50 600 100"
              stroke="url(#gradient5)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
            />
            <path
              className="connection-line"
              d="M600 100 Q650 150 700 100"
              stroke="url(#gradient6)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
            />
          </svg>
          <div className="tech-icons">
            {techIcons.map((tech, index) => (
              <div
                key={index}
                className={`tech-icon ${tech.class}`}
                data-tech={tech.name}
              >
                <i className={tech.icon}></i>
                <span className="tech-label">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
