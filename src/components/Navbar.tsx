import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const sectionIds = ["home", "about", "skills", "projects", "contact"];
    const sectionEls = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: container,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sectionEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
 
  return (
    <nav className="side-navbar">
      <ul className="side-navbar-links">
        {sections.map((section) => (
          <li key={section}>
            <span
              className={active === section ? "active" : ""}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
