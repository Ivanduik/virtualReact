import React from "react";
import { NavLink } from "react-router-dom";
import { userAuthData } from "../Mocks";
import { SignInBtn } from "./SignInBtn";
import { UserAuth } from "./UserAuth";
const setActive = ({ isActive }) =>
  isActive ? "header__nav-menu-item__active" : "header__nav-menu-item";
export function Navi({
  handleSignInOpen,
  isUserAuth,
  isDropDownMenu,
  hendleDeskDropDownMenuOpen,
  hendleDropDownMenuClose,
  handleDeskMenuLogOutClick,
}) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-menu">
        <li key="0" className="header__nav-menu-item" data-headermenu="Home">
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
        </li>

        <li key="1" className="header__nav-menu-item" data-headermenu="Games">
          <NavLink to="/games" className={setActive}>
            Games
          </NavLink>
        </li>
        <li
          key="2"
          className="header__nav-menu-item"
          data-headermenu="Features"
        >
          <NavLink to="/features" className={setActive}>
            Features
          </NavLink>
        </li>
      </ul>

      {isUserAuth ? (
        <UserAuth
          userPhoto={userAuthData.userPhoto}
          isDropDownMenu={isDropDownMenu}
          hendleDeskDropDownMenuOpen={hendleDeskDropDownMenuOpen}
          hendleDropDownMenuClose={hendleDropDownMenuClose}
          handleDeskMenuLogOutClick={handleDeskMenuLogOutClick}
        />
      ) : (
        <SignInBtn handleSignInOpen={handleSignInOpen} />
      )}
    </nav>
  );
}
