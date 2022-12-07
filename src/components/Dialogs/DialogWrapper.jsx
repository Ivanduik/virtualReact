import React from "react";
import "./DialogWrapper.css";

export const DialogWrapper = ({ children, closeDialog }) => {
  return (
    <div className="modal" onClick={closeDialog}>
      {children}
    </div>
  );
  //};
};
