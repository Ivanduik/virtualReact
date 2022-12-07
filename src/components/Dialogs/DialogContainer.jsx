import React from "react";
import "./DialogContainer.css";

export const DialogContainer = ({ title, children }) => {
  return (
    <div className="dialog-wripper" onClick={(e) => e.stopPropagation()}>
      <div className="dialog-wripper__header">
        <h3 className="dialog-wripper__header-title">{title}</h3>
      </div>
      {children}
    </div>
  );
};
