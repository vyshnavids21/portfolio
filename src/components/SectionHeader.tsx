import React from "react";

type SectionHeaderProps = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  aside?: React.ReactNode;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ id, eyebrow, title, lead, aside }) => (
  <header className="section-header">
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
    {aside}
  </header>
);

export default SectionHeader;
