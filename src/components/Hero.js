import React, { useEffect, useRef } from "react";
import useTypingEffect from "../hooks/useTypingEffect";
import useMatrixAnimation from "../hooks/useMatrixAnimation";

const Hero = () => {
  const canvasRef = useRef(null);
  const typingText = useTypingEffect("Hello! I'm Sahil Kumar", 100);

  useMatrixAnimation(canvasRef);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} id="matrix-canvas"></canvas>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-avatar-container">
            <img src="/avatr.png" alt="Avatar" className="avatar-img" />
            <div className="avatar-glow"></div>
          </div>
          <div className="hero-text">
            <h1 className="greeting">
              <span id="typing-text">
                Hello! I'm <span className="name-highlight">Sahil Kumar</span>
              </span>
              <span className="cursor">_</span>
            </h1>
            <p className="sub">
              A passionate technology enthusiast who believes first impressions
              matter—the cover reveals what lies inside.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
