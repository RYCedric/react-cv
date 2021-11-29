import React from "react";
import "./App.css";
import { Preview, print } from "react-html2pdf";

import DarkMode from "./Components/DarkMode";
import FormationsExperiences from "./Components/FormationsExperiences";
import Profil from "./Components/Profil";
import Skills from "./Components/Skills";
import User from "./Components/User";
import { MdOutlinePictureAsPdf } from "react-icons/md";

const App = () => {
  const handleGenerateCV = () => {
    let cvTemplate = document.getElementById("cv-print");
    cvTemplate.setAttribute("style", "width:210mm !important");
    cvTemplate.classList.add("cv-print");
    document.body.classList.remove("dark");
    setTimeout(() => {
      print("cv", "cv-print");
      cvTemplate.setAttribute("style", "width:100% !important");
      cvTemplate.classList.remove("cv-print");
    }, 300);
  };

  return (
    <Preview id={"cv-print"}>
      <div className="App">
        <div className="container">
          <div className="sidebar">
            <div className="actions">
              <DarkMode />
              <button onClick={handleGenerateCV}>
                <MdOutlinePictureAsPdf />
              </button>
            </div>
            <User />
            <Skills />
          </div>
          <div className="main">
            <Profil />
            <FormationsExperiences />
          </div>
        </div>
      </div>
    </Preview>
  );
};

export default App;
