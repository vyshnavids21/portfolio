import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { profile } from "../data/portfolio";
import "./styles/Contact.css";

const CONTACT_ROWS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail, external: false },
  { label: "LinkedIn", value: "linkedin.com/in/vyshnavids", href: profile.linkedin, icon: FiLinkedin, external: true },
  { label: "GitHub", value: "github.com/vyshnavids21", href: profile.github, icon: FiGithub, external: true },
];

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-intro">
            <SectionHeader
              id="contact-title"
              eyebrow="Contact"
              title="Let's work together"
              lead="Email is the fastest way to reach me. I'm also happy to connect on LinkedIn."
            />
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <FiMail aria-hidden="true" /> Email me
              </a>
              <button type="button" className="btn btn-secondary" onClick={copyEmail}>
                {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                {copied ? "Copied" : "Copy email"}
              </button>
              <span className="visually-hidden" aria-live="polite">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>
          </div>

          <ul className="contact-list">
            {CONTACT_ROWS.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="contact-row"
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="info-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="contact-text">
                    <span className="contact-label">{label}</span>
                    <span className="contact-value">{value}</span>
                  </span>
                  <FiArrowUpRight className="contact-arrow" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li>
              <div className="contact-row is-static">
                <span className="info-icon" aria-hidden="true">
                  <FiMapPin />
                </span>
                <span className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{profile.location}</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <footer className="container site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; TypeScript.
        </p>
        <a href="#home" className="footer-top">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
};

export default Contact;
