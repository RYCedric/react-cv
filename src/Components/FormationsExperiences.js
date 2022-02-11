import React from "react";
import "./FormationsExperiences.css";
import DataFormations from "../data/Formations";
import dataExperiences from "../data/Experiences";
import Formations from "./Formations";
import Experiences from "./Experiences";

const FormationsExperiences = () => {
  return (
    <div>
      <Experiences data={dataExperiences} />
      <Formations data={DataFormations} />
    </div>
  );
};

export default FormationsExperiences;
