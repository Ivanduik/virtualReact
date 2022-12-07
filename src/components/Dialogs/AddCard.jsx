import "./Adding-Card.css";
import "./ellipse-games.css";
import React from "react";
import { DialogContainer } from "./DialogContainer";
import { DialogWrapper } from "./DialogWrapper";
import { Formik, Form, Field } from "formik";
import { userAuthData } from "../Mocks";
import { GAMECARD, writeLocalStorage } from "../LocalStorage";
let card = {};

export const AddCard = ({
  DialogAddGameCardClose,
  setGamesPreview,
  setPageCountGame,
  itemOffset,
  endOffset,
  itemsCardPerPage,
}) => {
  const getValuesFromFormikAddCard = (v) => {
    let dat = Date.now();
    card = {
      id: userAuthData.username + dat,
      userName: userAuthData.username,
      userInstagram: "userInstagram",
      userPhoto: userAuthData.userPhoto,
      cardName: v.CardName,
      сardDescription: v.CardDescription,
      сardImageName: v.CardImageName,
      imgAlt: `${userAuthData.cardName} VR game`,
      date: dat,
      userReview: v.gameReview,
      starstar: "starstar",
      star: "star",
    };
    GAMECARD.unshift(card);
    writeLocalStorage(GAMECARD, "virtualUserGameCard");
    console.log(GAMECARD);
    DialogAddGameCardClose();
  };
  return (
    <DialogWrapper closeDialog={DialogAddGameCardClose}>
      <DialogContainer title="Add Card">
        <div className="ellipse-games">
          <div className="ellipse-games-elAdd"></div>
        </div>
        <Formik
          initialValues={{
            CardName: "",
            CardDescription: "",
            gameReview: "",
            CardImageName: "",
          }}
          onSubmit={(values) => {
            getValuesFromFormikAddCard(values);

            setPageCountGame(Math.ceil(GAMECARD.length / itemsCardPerPage));
            setGamesPreview(GAMECARD.slice(itemOffset, endOffset));
          }}
        >
          <Form className="add-card-form" id="add-card-form">
            <legend className="add-card__title">Add new card</legend>
            <Field
              className="add-card__input-style"
              type="text"
              name="CardName"
              placeholder="Card name"
              required
              autoComplete="CardName"
            />
            <Field
              className="add-card__input-style"
              type="text"
              name="CardDescription"
              placeholder="Card description"
              required
              autoComplete="CardDescription"
            />
            <Field
              className="add-card__input-style"
              type="text"
              name="gameReview"
              placeholder="Game review"
              required
              autoComplete="gameReview"
            />
            <Field
              className="add-card__input-style"
              type="text"
              name="CardImageName"
              placeholder="Card image name"
              required
              autoComplete="CardImageName"
            />
            <button className="add-card__btn" type="submit">
              Add game
            </button>
          </Form>
        </Formik>
      </DialogContainer>
    </DialogWrapper>
  );
};
