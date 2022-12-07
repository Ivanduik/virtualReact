import React from "react";
import { AwesomeExperiencesNavImg } from "../../icons";
import "./Awesome-experience.css";

export const AwesomeExperiences = () => {
  return (
    <section className="Awesome-experiences">
      <div className="Awesome-experiences__nav">
        <h2 className="Awesome-experiences__nav-title">
          Awesome experiences with virtual reality world
        </h2>
        <img
          className="Awesome-experiences__nav-img"
          src={AwesomeExperiencesNavImg}
          alt=""
        />
      </div>
    </section>
  );
};
