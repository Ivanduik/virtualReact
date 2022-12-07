import React from "react";
import "../fonts.css";
import { headerBtnArrow } from "../icons";
import "./footer.css";
let userEmail = "";
export const Foot = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(userEmail);
  };
  const inputChange = (e) => {
    userEmail = e.target.value;
  };
  return (
    <footer className="footer-general">
      <section className="footer">
        <form
          className="footer__new-way-form"
          action=""
          onSubmit={handleSubmit}
        >
          <fieldset className="footer__new-way-form-title">
            Explore product in new way
          </fieldset>
          <label className="footer__new-way-form-label" htmlFor="email">
            {" "}
            We specialize in creating visual identities for products and branda
            in your company.
          </label>
          <div className="footer__new-way-form-input-all">
            <input
              className="footer__new-way-form-input"
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={inputChange}
            />
            <button className="footer__new-way-form-btm" type="submit">
              Start <img src={headerBtnArrow} alt="arrow" />
            </button>
          </div>
        </form>
      </section>
    </footer>
  );
};
