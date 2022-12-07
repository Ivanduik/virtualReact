import React from "react";
import { SayClientsArrowLeft, SayClientsArrowRight } from "../../icons";
import { GAMECARD } from "../../LocalStorage";
import "./client-say.css";
let ITEMCARD = [{}];

function RandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

if (GAMECARD.length > 0 && GAMECARD.length < 3) ITEMCARD = GAMECARD;
else {
  let i = 0;
  while (i < 3) {
    let k = RandomInt(0, GAMECARD.length - 1);

    if (!ITEMCARD.includes(GAMECARD[k])) {
      ITEMCARD[i] = GAMECARD[k];
      i++;
    }
  }

  // ITEMCARD[1] = GAMECARD[RandomInt(0, GAMECARD.length)];
  // ITEMCARD[2] = GAMECARD[RandomInt(0, GAMECARD.length)];
}

export const UserSay = () => {
  return (
    <section className="client-say">
      <div className="client-say__sect">
        <div className="client-say__sect-info">
          <h2 className="client-say__sect-info-title">What our clients say</h2>
          <p className="client-say__sect-info-text">
            See what our customer say about us. It really matter for us. How
            good or bad we will make ir for evaluation to make EhyalLive better.
          </p>
        </div>

        <div className="client-say__clients">
          <img
            className="client-say__clients-arrow"
            src={SayClientsArrowLeft}
            alt="left arrow"
          />

          <ul className="client-say__clients-item">
            {ITEMCARD.map((data) => (
              <li key={data.id} className="client-say__clients-item-card">
                <h3 className="client-say__clients-item-card-text">
                  <span className="client-say__clients-item-card-yellow-text">
                    {data.starstar}
                  </span>
                  {data.star}
                </h3>
                <blockquote className="client-say__clients-item-card-blockquote">
                  “{data.userReview}”
                </blockquote>
                <div className="client-say__clients-item-card-info">
                  <img
                    className="client-say__clients-item-card-info-photo"
                    src={data.userPhoto}
                    alt="client"
                  />
                  <div className="client-say__clients-item-card-info-name">
                    <p className="client-say__clients-item-card-info-name-user">
                      {data.userName}
                    </p>
                    <a
                      className="client-say__clients-item-card-info-name-link"
                      href="instag"
                    >
                      {data.userInstagram}
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <img
            className="client-say__clients-arrow"
            src={SayClientsArrowRight}
            alt="right arrow"
          />
        </div>
      </div>
    </section>
  );
};
