import React from "react";
import "./gamespreview.css";
import "./gamespagination.css";

import ReactPaginate from "react-paginate";
import { cardStr } from ".";

export const GamesPreview = ({
  isGamesPreview,
  handleSetGameCard,
  pageCountGame,
  handlePageClick,
}) => {
  return (
    <>
      <div className="games-experiences__video">
        <div className="games-experiences__video-prev">
          <ul className="games-experiences__video-prev-item">
            {isGamesPreview.map((el) => (
              <li
                key={el.id}
                className="games-experiences__video-prev-item-img"
                onClick={() => handleSetGameCard(el)}
              >
                <img
                  className="games-experiences__video-prev-item-img-opt"
                  data-cardid={el.id}
                  src={el.сardImageName}
                  alt={el.imgAlt}
                />
                <div
                  className="games-experiences__video-prev-item-img-info-all"
                  data-cardid={el.id}
                >
                  <div
                    className="games-experiences__video-prev-item-img-info"
                    data-cardid={el.id}
                  >
                    <h3
                      className="games-experiences__video-prev-item-img-info-title"
                      data-cardid={el.id}
                    >
                      {el.cardName}
                    </h3>
                    <p
                      className="games-experiences__video-prev-item-img-info-text"
                      data-cardid={el.id}
                    >
                      {cardStr(el.сardDescription)}
                    </p>
                  </div>
                  <div
                    className="games-experiences__video-prev-item-img-info"
                    data-cardid={el.id}
                  >
                    <h3
                      className="games-experiences__video-prev-item-img-info-title"
                      data-cardid={el.id}
                    >
                      {el.userName}
                    </h3>
                    <p
                      className="games-experiences__video-prev-item-img-info-text"
                      data-cardid={el.id}
                    >
                      {cardStr(el.userReview)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="games-experiences__video-page">
        <ReactPaginate
          className={"games-experiences__video-page-items"}
          activeLinkClassName={
            "games-experiences__video-page-item-number-active"
          }
          disabledClassName={
            "games-experiences__video-page-item-number-arrow-active"
          }
          breakLinkClassName={"games-experiences__video-page-item-number"}
          breakLabel="..."
          nextClassName={"games-experiences__video-page-item-number"}
          nextLabel=">"
          onPageChange={handlePageClick}
          pageLinkClassName={"games-experiences__video-page-item-number"}
          pageRangeDisplayed={1}
          pageCount={pageCountGame}
          previousClassName={"games-experiences__video-page-item-number"}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};
