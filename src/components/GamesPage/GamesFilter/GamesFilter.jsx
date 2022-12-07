import "./gamesfilter.css";
import React from "react";
export const GamesFilter = ({
  sortChange,
  handleAddGameCardOpen,
  isUserAuth,
}) => {
  return (
    <div className="games-experiences__filtr">
      <p className="games-experiences__filtr-title">VR Games</p>
      <div className="games-experience-wrap">
        {isUserAuth ? (
          <button
            className="games__addcard-btn  games__addcard-btn-active"
            onClick={handleAddGameCardOpen}
          >
            Add new card
          </button>
        ) : (
          <button
            className="games__addcard-btn"
            style={{ cursor: " not-allowed" }}
          >
            Add new card
          </button>
        )}
        <select
          className="games-experiences__filtr-select"
          onChange={sortChange}
        >
          <option value="newfirst">New first</option>
          <option value="newlast">New last</option>
        </select>
      </div>
    </div>
  );
};
