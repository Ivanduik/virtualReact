import React from "react";
import { Link } from "react-router-dom";
<Link to="/">Home</Link>;
export const Logo = ({ logoIcon }) => {
  const handleLogoCkick = () => {
    console.log("logo Click");
  };
  return (
    <div>
      <div className="header__logo">
        <Link to="/">
          <img src={logoIcon} onClick={handleLogoCkick} alt="" />
        </Link>
      </div>
    </div>
  );
};
