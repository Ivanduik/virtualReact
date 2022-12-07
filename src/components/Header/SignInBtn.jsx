import React from "react";

export const SignInBtn = ({ handleSignInOpen }) => {
  return (
    <div className="header__nav-menu-user-info">
      <button className="header__nav-menu-button" onClick={handleSignInOpen}>
        Sign In
      </button>
    </div>
  );
};
