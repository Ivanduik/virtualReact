import React from "react";
import { Outlet } from "react-router";

import { DeskMenu, DrobDownMobMenu } from "../DropDownMenu";
import { burgerMenu, burgerMenuClose, logoIcon } from "../icons";

import "./header.css";
import { Logo } from "./Logo";
import { Navi } from "./Navi";
export const Header = ({
  handleSignInOpen,
  isUserAuth,
  setUser,
  verifyUser,
  handleUserNoAuth,
}) => {
  const [isDropDownMenu, setDropDownMenu] = React.useState(false);
  const [burgerMobMenu, setBurgerMobMenu] = React.useState(false);

  const burgerMobMenuOpen = () => {
    setBurgerMobMenu(true);
  };
  const burgerMobMenuClose = () => {
    setBurgerMobMenu(false);
  };
  const hendleDeskDropDownMenuOpen = () => {
    setDropDownMenu(DeskMenu);
  };

  const handleDeskMenuLogOutClick = () => {
    handleUserNoAuth();
    setDropDownMenu(false);
  };
  const hendleDropDownMenuClose = () => {
    setDropDownMenu(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__all">
          <Logo logoIcon={logoIcon} />
          <Navi
            handleSignInOpen={handleSignInOpen}
            isUserAuth={isUserAuth}
            setUser={setUser}
            verifyUser={verifyUser}
            isDropDownMenu={isDropDownMenu}
            hendleDeskDropDownMenuOpen={hendleDeskDropDownMenuOpen}
            hendleDropDownMenuClose={hendleDropDownMenuClose}
            handleDeskMenuLogOutClick={handleDeskMenuLogOutClick}
          />
          {burgerMobMenu ? (
            <img
              className="header__nav-menu-close"
              src={burgerMenuClose}
              alt=" close"
              onClick={burgerMobMenuClose}
            />
          ) : (
            <img
              className="header__nav-menu-burger"
              src={burgerMenu}
              onClick={burgerMobMenuOpen}
              alt=" burger menu"
            />
          )}
          {/* <div className="header__nav-mobmenu">
            <div className="header__nav-mobmen-user__auth"></div>

            <ul className="header__nav-mobmenu-menu">
              <li className="header__nav-mobmenu-menu-item" data-mobmenu="Home">
                Home
              </li>
              <li
                className="header__nav-mobmenu-menu-item"
                data-mobmenu="cardManagement"
              >
                Games
              </li>
              <li
                className="header__nav-mobmenu-menu-item"
                data-mobmenu="Company"
              >
                Company
              </li>
              <li
                className="header__nav-mobmenu-menu-item"
                data-mobmenu="Features"
              >
                Features
              </li>
            </ul>

            <div id="header__nav-mobmenu-btn"></div>
          </div> */}
        </div>
      </header>
      <Outlet />
      {burgerMobMenu && (
        <DrobDownMobMenu
          isUserAuth={isUserAuth}
          burgerMobMenuClose={burgerMobMenuClose}
          handleUserNoAuth={handleUserNoAuth}
          handleSignInOpen={handleSignInOpen}
        />
      )}
    </>
  );
};
