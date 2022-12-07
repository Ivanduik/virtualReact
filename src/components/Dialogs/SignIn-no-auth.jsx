import "./sign-in-page.css";
import React from "react";
import { DialogContainer } from "./DialogContainer";
import { DialogWrapper } from "./DialogWrapper";

export const SignIn = ({ closeDialog, setUser }) => {
  return (
    <DialogWrapper closeDialog={closeDialog}>
      <DialogContainer title="Sign In">
        <div className="ellipse-games">
          <div className="ellipse-games-elAdd"></div>
        </div>
      </DialogContainer>
    </DialogWrapper>
  );
};
