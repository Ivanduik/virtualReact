import React from "react";
import "./DialogGameCard.css";
import { DialogWrapper } from "./DialogWrapper";

export const DialogGameCard = ({ gameCard, closeDialog }) => {
  return (
    <DialogWrapper closeDialog={closeDialog}>
      <div
        className="image-card-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="image-card-image-container">
          <img
            className="image-card-image"
            src={gameCard.сardImageName}
            alt="User"
          />
        </div>
        <div className="image-card__info">
          <h3 className="image-card__info-gamename">{gameCard.cardName}</h3>
          <p className="image-card__info-gamedescription">
            {gameCard.сardDescription}
          </p>

          <h3 className="image-card__info-username">
            <img
              className="image-card__info-user-foto"
              src={gameCard.userPhoto}
              alt="user"
            />{" "}
            {gameCard.userName}
          </h3>
          <p className="image-card__info-userreview">{gameCard.userReview}</p>
        </div>
      </div>
    </DialogWrapper>
  );
};
