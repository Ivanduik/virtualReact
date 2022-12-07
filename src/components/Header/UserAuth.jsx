import React from "react";
import { DropDownMenu } from "../DropDownMenu";

export const UserAuth = ({
  userPhoto,
  isDropDownMenu,
  hendleDeskDropDownMenuOpen,
  hendleDropDownMenuClose,
  handleDeskMenuLogOutClick,
}) => {
  return (
    <div className="header__nav-menu-user-info">
      <img
        className="header__nav-menu-photo-user"
        src={userPhoto}
        alt="user"
        onClick={hendleDeskDropDownMenuOpen}
      />
      {isDropDownMenu ? (
        <DropDownMenu
          items={isDropDownMenu}
          hendleDropDownMenuClose={hendleDropDownMenuClose}
          handleDeskMenuLogOutClick={handleDeskMenuLogOutClick}
        />
      ) : null}
    </div>
  );
};
