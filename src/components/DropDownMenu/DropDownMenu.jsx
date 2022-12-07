import React from "react";
import "./dropdownmenu.css";
import { headerMenuArrowUp } from "../icons";
import { NavLink } from "react-router-dom";

export const DropDownMenu = ({
  items,
  hendleDropDownMenuClose,
  handleDeskMenuLogOutClick,
}) => {
  const handleDeskMenuArrowClick = () => hendleDropDownMenuClose;

  return (
    <div className="modal" onClick={hendleDropDownMenuClose}>
      <div className="container">
        <div
          className="home__nav-home-menu"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="home__nav-home-menu-user-menu-all">
            {items.map((el) => (
              <li
                key={el.id}
                className="home__nav-home-menu-user-menu-items"
                onClick={handleDeskMenuArrowClick()}
              >
                <NavLink
                  to={`/${el.id}`}
                  className={"home__nav-home-menu-user-menu-all"}
                >
                  {el.item}
                </NavLink>
              </li>
            ))}
            <li
              key="logout"
              className="home__nav-home-menu-user-menu-items"
              onClick={() => handleDeskMenuLogOutClick()}
            >
              Log Out
            </li>
          </ul>
          <img
            className="home__nav-home-menu-user-menu-all-arrow"
            src={headerMenuArrowUp}
            onClick={handleDeskMenuArrowClick()}
            alt="arrow"
          ></img>
        </div>
      </div>
    </div>
  );
};
