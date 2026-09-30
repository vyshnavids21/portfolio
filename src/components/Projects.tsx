import React from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { professionalProjects, projects } from "../data/portfolio";
import "./styles/Projects.css";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader id="projects-title" eyebrow="Projects" title="Professional & personal work" />

        <div className="projects-layout">
          <div className="project-group">
            <h3 className="group-label">
              Professional · ZeroNorth <span className="group-count">{professionalProjects.length}</span>
            </h3>

            <div className="product-grid">
              {professionalProjects.map((product) => (
                <article key={product.name} className="product-card">
                  <header className="product-head">
                    <h4 className="product-name">{product.name}</h4>
                    <span className="badge badge-accent">{product.kind}</span>
                  </header>

                  <p className="product-desc">{product.description}</p>

                  <dl className="product-specs">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="spec-row">
                        <dt>{spec.label}</dt>
                        <dd>{spec.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="check-list" aria-label="My contributions">
                    {product.contributions.map((item) => (
                      <li key={item}>
                        <FiCheck aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <footer className="product-foot chips">
                    {product.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </footer>
                </article>
              ))}
            </div>
          </div>

          <div className="project-group">
            <h3 className="group-label">
              Personal &amp; academic <span className="group-count">{projects.length}</span>
            </h3>

            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.name} className="card project-card">
                  <span className="project-mark" aria-hidden="true">
                    {project.mark}
                  </span>

                  <div className="project-body">
                    <header className="project-head">
                      <h4 className="project-name">{project.name}</h4>
                      <span className="project-tagline">{project.tagline}</span>
                      <span className="badge project-badge">{project.category}</span>
                    </header>

                    <p className="project-desc">{project.description}</p>

                    {project.highlights && (
                      <ul className="check-list check-list--single">
                        {project.highlights.map((item) => (
                          <li key={item}>
                            <FiCheck aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {project.features.length > 0 && (
                      <ul className="project-features">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    )}

                    <footer className="project-foot">
                      <div className="chips">
                        {project.stack.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
                          Live demo <FiArrowUpRight aria-hidden="true" />
                        </a>
                      )}
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
