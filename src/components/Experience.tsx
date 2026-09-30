import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { education, experience, goals } from "../data/portfolio";
import { handleTabKeys } from "../utils/tabs";
import "./styles/Experience.css";

const Experience: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const job = experience[selected];

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader id="experience-title" eyebrow="Experience" title="Where I've been building" />

        <div className="exp-layout">
          <div className="exp-side">
            <div className="role-tabs" role="tablist" aria-label="Roles" aria-orientation="vertical">
              {experience.map((item, i) => (
                <button
                  key={item.role}
                  id={`role-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={i === selected}
                  aria-controls="role-panel"
                  tabIndex={i === selected ? 0 : -1}
                  className={`role-tab${i === selected ? " is-active" : ""}${item.current ? " is-current" : ""}`}
                  onClick={() => setSelected(i)}
                  onKeyDown={(e) => handleTabKeys(e, experience.length, selected, setSelected, "role-tab")}
                >
                  <span className="role-tab-marker" aria-hidden="true" />
                  <span className="role-tab-text">
                    <span className="role-tab-period">{item.period}</span>
                    <span className="role-tab-role">{item.role}</span>
                    <span className="role-tab-company">{item.company}</span>
                  </span>
                </button>
              ))}
            </div>

            <article className="card info-card">
              <h3 className="tl-label info-label">Education</h3>
              <p className="info-strong">{education.degree}</p>
              <p className="info-muted">{education.school}</p>

              <h3 className="tl-label info-label info-label--split">What drives me</h3>
              <ul className="dot-list info-list">
                {goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </article>
          </div>

          <article
            key={selected}
            id="role-panel"
            role="tabpanel"
            aria-labelledby={`role-tab-${selected}`}
            className="card role-panel"
          >
            <header className="tl-head">
              <div className="tl-heading">
                <h3 className="tl-role">{job.role}</h3>
                <p className="tl-org">
                  {job.company}
                  <span className="tl-org-note">
                    {job.companyNote && ` · ${job.companyNote}`} · {job.location}
                  </span>
                </p>
              </div>
              <div className="tl-status">
                <span className={`badge${job.current ? " badge-live" : ""}`}>{job.status}</span>
                <span className="tl-period">{job.period}</span>
              </div>
            </header>

            {job.products && (
              <div className="tl-block">
                <h4 className="tl-label">Products</h4>
                <ul className="tl-product-list">
                  {job.products.map((product) => (
                    <li key={product.name} className="tl-product">
                      <h5 className="tl-product-name">{product.name}</h5>
                      <p className="tl-product-desc">{product.description}</p>
                      <div className="chips">
                        {product.stack.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="tl-block">
              <h4 className="tl-label">Highlights</h4>
              <ul className="dot-list tl-points">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            {job.stack && (
              <div className="chips">
                {job.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
