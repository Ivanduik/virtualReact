import React from "react";
import { newExperienceGameGirl, newExperienceGameMan } from "../../images";
import "./new-experience__game.css";

export const NewExperience = () => {
  const handleGetItNowCkick = () => {
    console.log("Get it Now Click");
  };
  return (
    <section className="new-experience">
      <div className="new-experience__img">
        <div className="new-experience__img-photo">
          <img
            className="new-experience__img-photo-girl"
            src={newExperienceGameGirl}
            alt="game-girl"
          />
          <img
            className="new-experience__img-photo-man"
            src={newExperienceGameMan}
            alt="game-man"
          />
        </div>
        <div className="new-experience__game">
          <h2 className="new-experience__game-title">
            New Experience In Playing Game
          </h2>
          <p className="new-experience__game-info">
            You can try playing the game with a new style and of course a more
            real feel, like you are the main character in your game and
            adventure in this new digital world.
          </p>
          <button
            className="new-experience__game-btn"
            onClick={handleGetItNowCkick}
          >
            Get it Now
          </button>
        </div>
      </div>
    </section>
  );
};
