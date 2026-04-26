import React from "react";
import "./styles/Skills.css";

import AngularIcon from "../assets/images/angular-icon.png";
import JSIcon from "../assets/images/javascript-icon.png";
import TSIcon from "../assets/images/typescript-icon.png";
import NodeIcon from "../assets/images/nodejs-icon.svg";
import MongoIcon from "../assets/images/MongoDB-icon.png";
import CassandraIcon from "../assets/images/cassandra-icon.png";
import GitIcon from "../assets/images/git-icon.png";
import PostmanIcon from "../assets/images/postman-icon.svg";
import NpmIcon from "../assets/images/npm-icon.svg";

const Skills: React.FC = () => {
    return (
      <div className="skills-section">
        <h2 className="skills-title">Technical Skills</h2>

        <div className="skills-cards">
          <div className="skills-card">
            <h3 className="card-title">Frontend Development</h3>
            <div className="skills-icons">
              <div className="skill-item">
                <img src={AngularIcon} alt="Angular" title="Angular" />
                <span>Angular</span>
              </div>
              <div className="skill-item">
                <img src={JSIcon} alt="JavaScript" title="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <img src={TSIcon} alt="TypeScript" title="TypeScript" />
                <span>TypeScript</span>
              </div>
            </div>
          </div>
  
          <div className="skills-card">
            <h3 className="card-title">Backend & Databases</h3>
            <div className="skills-icons">
              <div className="skill-item">
                <img src={NodeIcon} alt="Node.js" title="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <img src={MongoIcon} alt="MongoDB" title="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="skill-item">
                <img src={CassandraIcon} alt="Cassandra" title="Cassandra" />
                <span>Cassandra</span>
              </div>
            </div>
          </div>
  
          <div className="skills-card">
            <h3 className="card-title">Tools & Utilities</h3>
            <div className="skills-icons">
              <div className="skill-item">
                <img src={GitIcon} alt="Git" title="Git" />
                <span>Git</span>
              </div>
              <div className="skill-item">
                <img src={PostmanIcon} alt="Postman" title="Postman" />
                <span>Postman</span>
              </div>
              <div className="skill-item">
                <img src={NpmIcon} alt="npm" title="npm" />
                <span>npm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
