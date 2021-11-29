import React from "react";
import Interests from "./Interests";
import Skill from "./Skill";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating="5" />
        <Skill title="CSS" rating="5" />
        <Skill title="JAVASCRIPT" rating="4" />
        <Skill title="REACT" rating="4" />
        <Skill title="NODE" rating="3" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Français" rating="4" />
        <Skill title="Anglais" rating="3" />
        <Skill title="Japonnais" rating="2" />
      </div>
      <Interests />
    </>
  );
};

export default Skills;
