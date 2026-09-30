import React, { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/portfolio";
import "./styles/Navbar.css";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight the section that owns the upper third of the viewport.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const marker = window.innerHeight * 0.33;
      let current = NAV_ITEMS[0].id;

      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= marker) current = id;
      }

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = NAV_ITEMS[NAV_ITEMS.length - 1].id;

      setActive(current);
      setScrolled(window.scrollY > 8);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleNavigate = (id: string) => {
    setActive(id);
    setMenuOpen(false);
  };

  const links = NAV_ITEMS.map(({ id, label }) => (
    <li key={id}>
      <a
        href={`#${id}`}
        className={`nav-link${active === id ? " is-active" : ""}`}
        aria-current={active === id ? "true" : undefined}
        onClick={() => handleNavigate(id)}
      >
        {label}
      </a>
    </li>
  ));

  return (
    <header className={`site-header${scrolled || menuOpen ? " is-scrolled" : ""}`}>
      <nav className="container nav-inner" aria-label="Primary">
        <a href="#home" className="brand" onClick={() => handleNavigate("home")}>
          <span className="brand-mark" aria-hidden="true">
            VD
          </span>
          <span className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role">{profile.role}</span>
          </span>
        </a>

        <ul className="nav-tabs">{links}</ul>

        <div className="nav-actions">
          <a href={profile.github} target="_blank" rel="noreferrer" className="nav-icon" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="nav-icon" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? " is-open" : ""}`} hidden={!menuOpen}>
        <ul className="container">{links}</ul>
      </div>
    </header>
  );
};

export default Navbar;
