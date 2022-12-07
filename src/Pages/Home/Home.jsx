import React from "react";
import "./ellipse-index.css";
import {
  AwesomeExperiences,
  Foot,
  Hero,
  NewExperience,
  UserSay,
  ValuesCultureGeneral,
} from "../../components";
export const Home = () => {
  return (
    <>
      {" "}
      <div className="ellipse">
        <div className="ellipse-el1"></div>

        <div className="ellipse-el2"></div>

        <div className="ellipse-el3"></div>

        <div className="ellipse-el4"></div>

        <div className="ellipse-el5"></div>
        <div className="ellipse-el6"></div>
      </div>
      <Hero />
      <NewExperience />
      <AwesomeExperiences />
      <UserSay />
      <ValuesCultureGeneral />
      <Foot />
    </>
  );
};
