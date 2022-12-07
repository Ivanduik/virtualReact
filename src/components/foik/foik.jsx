import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const foik = (cc) => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={""}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          cc = 11;
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="txt" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="txt" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
