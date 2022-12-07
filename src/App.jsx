import React from "react";
import "./components/fonts.css";
import { Route, Routes } from "react-router-dom";
import {
  AppWrapper,
  Features,
  Games,
  Header,
  Home,
  readLocalStorage,
  SignIn,
  userAuthData,
  writeLocalStorage,
} from "./components";

const verifyUser = () => {
  if (readLocalStorage("userAuthData")) {
    let user = readLocalStorage("userAuthData");
    userAuthData.userAuth = user.userAuth;
    userAuthData.username = user.username;
    userAuthData.password = user.password;
    userAuthData.userPhoto = user.userPhoto;
    return true;
  }
  return false;
};

export const App = () => {
  const [isSignInDialogShow, SetIsSignInDialogShow] = React.useState(false);
  const [isUserAuth, setUserAuth] = React.useState(verifyUser);

  const handleUserAuth = () => {
    setUserAuth(true);
  };
  const handleUserNoAuth = () => {
    setUserAuth(false);
    writeLocalStorage("", "userAuthData");
  };
  const handleSignInOpen = () => {
    SetIsSignInDialogShow(true);
  };
  const handleSignInClose = () => {
    SetIsSignInDialogShow(false);
  };

  return (
    <>
      <AppWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <Header
                handleSignInOpen={handleSignInOpen}
                isUserAuth={isUserAuth}
                setUser={handleUserAuth}
                handleUserNoAuth={handleUserNoAuth}
              />
            }
          >
            <Route path="/" index element={<Home />} />

            <Route path="/games" element={<Games isUserAuth={isUserAuth} />} />

            <Route path="/features" element={<Features />} />
          </Route>
        </Routes>
      </AppWrapper>
      {isSignInDialogShow && (
        <SignIn closeDialog={handleSignInClose} setUser={handleUserAuth} />
      )}
    </>
  );
};
