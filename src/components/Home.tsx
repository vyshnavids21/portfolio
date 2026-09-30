import React from "react";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import VyshnaviImage from "../assets/images/Vyshnavi_image.jpg";
import { heroStats, profile } from "../data/portfolio";
import "./styles/Home.css";

const Home: React.FC = () => {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge badge-live hero-badge">
            {profile.role} at {profile.company}
          </span>

          <h1 id="hero-title" className="hero-title">
            <span className="hero-hello">Hi, I'm</span>
            {profile.name}
          </h1>

          <p className="hero-tagline">
            I build <span className="text-gradient">elegant, accessible and high-performance</span> web applications.
          </p>

          <p className="hero-desc">
            A software developer with strong attention to user experience and clean design. I write scalable,
            maintainable code that delivers real-world impact, from real-time analytics dashboards to the services
            behind them.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View projects <FiArrowRight aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
            <div className="hero-social">
              <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
                <FiMail />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
                <FiGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo">
            <img src={VyshnaviImage} alt="Portrait of Vyshnavi D S" />
          </div>
        </div>

        <dl className="hero-stats">
          {heroStats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <dt>{stat.label}</dt>
              <dd>
                {Array.isArray(stat.value) ? (
                  <ul className="dot-list hero-stat-list">
                    {stat.value.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  stat.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Home;
