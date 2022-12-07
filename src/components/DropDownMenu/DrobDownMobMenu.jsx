import React from "react";
import { NavLink } from "react-router-dom";
import { userAuthData } from "../Mocks";

export const DrobDownMobMenu = ({
  isUserAuth,
  burgerMobMenuClose,
  handleUserNoAuth,
  handleSignInOpen,
}) => {
  return (
    <>
      <div className="modal" onClick={burgerMobMenuClose}>
        <div
          className="header__nav-mobmenu"
          onClick={(e) => e.stopPropagation()}
        >
          {isUserAuth && (
            <div className="header__nav-mobmen-user__auth">
              <h6 className="header__nav-mobmen-user-name">{`${userAuthData.username}`}</h6>
              <img
                className="header__nav-menu-photo-user"
                src={userAuthData.userPhoto}
                alt="user"
              />
            </div>
          )}
          <ul className="header__nav-mobmenu-menu">
            <li
              className="header__nav-mobmenu-menu-item"
              onClick={burgerMobMenuClose}
            >
              <NavLink to="/" className={"header__nav-mobmenu-menu-item"}>
                Home
              </NavLink>
            </li>

            <li
              onClick={burgerMobMenuClose}
              className="header__nav-mobmenu-menu-item"
            >
              <NavLink to="/games" className={"header__nav-mobmenu-menu-item"}>
                Games
              </NavLink>
            </li>

            <li
              onClick={burgerMobMenuClose}
              className="header__nav-mobmenu-menu-item"
            >
              <NavLink to="/games" className={"header__nav-mobmenu-menu-item"}>
                Company
              </NavLink>
            </li>
            <li
              onClick={burgerMobMenuClose}
              className="header__nav-mobmenu-menu-item"
            >
              <NavLink to="/" className={"header__nav-mobmenu-menu-item"}>
                Features
              </NavLink>
            </li>
          </ul>

          {isUserAuth ? (
            <button
              className="header__nav-mobmenu-btn"
              onClick={() => {
                handleUserNoAuth();
                burgerMobMenuClose();
              }}
            >
              Sing Out
            </button>
          ) : (
            <button
              className="header__nav-mobmenu-btn"
              onClick={() => {
                handleSignInOpen();
                burgerMobMenuClose();
              }}
            >
              Sing In
            </button>
          )}
        </div>
      </div>
    </>
  );
};
