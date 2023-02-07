import React from "react";
import './presentation.css'

const AboutMe: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Angel Torres Mora</h1>
      <div className="flip">
    <div className="content">
        <div className="front">
            <h2>Developer</h2>
        </div>
        <div className="back">
            <h2>Back</h2>
            <p>Back Description</p>
        </div>
    </div>
</div>
      <h2 className="subtitle">
        Developing the world, one line of code at a time</h2>
      <img src="" alt="" id="profile" />
      <p className="about-me">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <button id="btn-py-projects">View my Projects</button>
    </div>
  );
};

export default AboutMe;
