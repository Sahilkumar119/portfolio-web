import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-symbol">λ</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Lab
            </a>
          </li>
        </ul>
        <div className="nav-social">
          <a
            href="https://github.com/Sahiljangra115"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-link"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sahilkumar119/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-link"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
