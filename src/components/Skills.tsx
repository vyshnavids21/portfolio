import React from "react";
import { FiCode, FiDatabase, FiTool } from "react-icons/fi";
import type { IconType } from "react-icons";
import SectionHeader from "./SectionHeader";
import { skillGroups, SkillGroup } from "../data/portfolio";
import "./styles/Skills.css";

const GROUP_ICONS: Record<SkillGroup["key"], IconType> = {
  frontend: FiCode,
  backend: FiDatabase,
  tools: FiTool,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          id="skills-title"
          eyebrow="Skills"
          title="Technical toolkit"
          aside={
            <p className="skills-legend">
              <span className="core-dot" aria-hidden="true" /> Core professional stack
            </p>
          }
        />

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = GROUP_ICONS[group.key];
            return (
              <article key={group.key} className={`card skill-card skill-card--${group.key}`}>
                <header className="skill-card-head">
                  <span className="info-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{group.title}</h3>
                  <span className="skill-count">{String(group.items.length).padStart(2, "0")}</span>
                </header>

                <ul className="skill-tiles">
                  {group.items.map((skill) => (
                    <li key={skill.name} className={`skill-tile${skill.core ? " is-core" : ""}`}>
                      {skill.icon ? (
                        <img src={skill.icon} alt="" loading="lazy" />
                      ) : (
                        skill.glyph && <skill.glyph className="skill-glyph" style={{ color: skill.color }} aria-hidden="true" />
                      )}
                      <span>{skill.name}</span>
                      {skill.core && <span className="visually-hidden"> (core stack)</span>}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
