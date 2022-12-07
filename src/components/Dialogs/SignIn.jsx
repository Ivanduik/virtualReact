import "./sign-in-page.css";
import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DialogContainer } from "./DialogContainer";
import { DialogWrapper } from "./DialogWrapper";
import { readLocalStorage, writeLocalStorage } from "../LocalStorage";
import { userAuthData } from "../Mocks";

export const SignIn = ({ closeDialog, setUser }) => {
  return (
    <DialogWrapper closeDialog={closeDialog}>
      <DialogContainer title="Sign In">
        <div className="ellipse-games">
          <div className="ellipse-games-elAdd"></div>
        </div>
        <Formik
          initialValues={{ user: "", password: "" }}
          validationSchema={yup.object({
            user: yup.string().required("Required field !!!"),
            password: yup.string().required("Required field !!!"),
          })}
          onSubmit={(values) => {
            // getValuesFromFormik(values);
            let user = readLocalStorage("virtualUser");

            user.forEach((element) => {
              if (
                element.userLogin === values.user &&
                element.userPsw === values.password
              ) {
                userAuthData.userAuth = true;
                userAuthData.username = values.user;
                userAuthData.password = values.password;
                userAuthData.userPhoto = element.userPhoto;
                writeLocalStorage(userAuthData, "userAuthData");
                setUser();
                closeDialog();
              }
            });
          }}
        >
          <Form className="signin__sign-in-form">
            <Field
              className="signin__sign-form-in-input-style"
              type="text"
              name="user"
              placeholder="Email or Username"
              autoComplete="username"
            />
            <ErrorMessage
              className="error-message-name"
              name="user"
              component="div"
            />

            <Field
              className="signin__sign-form-in-input-style signin__sign-form-in-input-style-psw"
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Password"
            />
            <ErrorMessage
              className="error-message-pas"
              name="password"
              component="div"
            />
            <button className="signin__sign-form-in-btn" type="submit">
              Sign in
            </button>
          </Form>
        </Formik>
      </DialogContainer>
    </DialogWrapper>
  );
};
