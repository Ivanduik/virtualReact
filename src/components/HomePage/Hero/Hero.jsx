import React from "react";
import {
  heroUsersItemImg1,
  heroUsersItemImg2,
  heroUsersItemImg3,
  heroUsersItemImg4,
} from "../../icons";
import { heroCinematcGirl } from "../../images";
import "./hero.css";

export const Hero = () => {
  const handleInviteFriendCkick = () => {
    console.log("Invite Friend Click");
  };
  const handleExploreDeviceCkick = () => {
    console.log("Explore Device Click");
  };

  return (
    <section className="hero">
      <div className="hero__explore">
        <div className="hero__explore-information">
          <h1 className="hero__explore-title">
            Let’s Explore <wbr /> Three-Dimensional visual
          </h1>
          <p className="hero__explore-text">
            With virtual technology you can see the digital world feel more real
            and you can play the game with a new style.
          </p>
        </div>

        <div className="hero__invitefriend">
          <button
            className="hero__invitefriend-btn"
            onClick={handleInviteFriendCkick}
          >
            Invite Friend
          </button>
          <button
            className="hero__invitefriend-info-btn"
            onClick={handleExploreDeviceCkick}
          >
            Explore Device
          </button>
        </div>

        <div className="hero__users">
          <ul className="hero__users-items">
            <li className="hero__users-item">
              <img
                className="hero__users-item-img"
                src={heroUsersItemImg1}
                alt="something"
              />
            </li>

            <li className="hero__users-item">
              <img
                className="hero__users-item-img"
                src={heroUsersItemImg2}
                alt="something"
              />
            </li>
            <li className="hero__users-item">
              <img
                className="hero__users-item-img"
                src={heroUsersItemImg3}
                alt="something"
              />
            </li>
            <li className="hero__users-item">
              <img
                className="hero__users-item-img"
                src={heroUsersItemImg4}
                alt="something"
              />
            </li>
          </ul>
          <span className="hero__users-online">400k people online</span>
        </div>
      </div>

      <div className="hero__cinematc">
        <div className="hero__cinematc-all">
          <img
            className="hero__cinematc-img-girl"
            src={heroCinematcGirl}
            alt="game girl"
          />

          <div className="hero__cinematc-information">
            <h2 className="hero__cinematc-information-title">
              Cinematic Virtual Reality
            </h2>
            <span className="hero__cinematc-information-line"></span>
            <p className="hero__cinematc-information-text">
              Let’s be the best for more real and effective results and ready to
              explore the limitless world that we have prepared for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
