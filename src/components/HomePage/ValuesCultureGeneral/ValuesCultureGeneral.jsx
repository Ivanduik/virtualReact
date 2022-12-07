import React from "react";
import {
  heartIcon,
  intelligentRisk,
  simple,
  sincere,
  stronger,
} from "../../icons";
import "./values-culture.css";

export const ValuesCultureGeneral = () => {
  return (
    <section className="values-culture-general">
      <div className="values-culture">
        <div className="values-culture__info">
          <h3 className="values-culture__info-title">
            Our company values culture{" "}
            <img className="heart-icon" src={heartIcon} alt=" heart icon" />
          </h3>

          <p className="values-culture__info-text">
            {" "}
            We specialize in creating visual identities for products and branda
            in your company.
          </p>
        </div>
        <div className="values-culture__icons">
          <ul className="values-culture__icons-items">
            <li className="values-culture__icons-items-blk">
              <img
                className="values-culture__icons-items-img"
                src={sincere}
                alt="icon sincere"
              />
              <p className="values-culture__icons-items-img-text">Be Sincere</p>
            </li>
            <li className="values-culture__icons-items-blk">
              <img
                className="values-culture__icons-items-img"
                src={intelligentRisk}
                alt="icon intelligentrisk"
              />
              <p className="values-culture__icons-items-img-text">
                Take intelligent risks
              </p>
            </li>
            <li className="values-culture__icons-items-blk">
              <img
                className="values-culture__icons-items-img"
                src={stronger}
                alt="icon stronger"
              />
              <p className="values-culture__icons-items-img-text">
                Stronger together
              </p>
            </li>

            <li className="values-culture__icons-items-blk">
              <img
                className="values-culture__icons-items-img"
                src={simple}
                alt="icon simple"
              />
              <p className="values-culture__icons-items-img-text">
                Keep it simple
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
