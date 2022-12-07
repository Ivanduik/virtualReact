import React from "react";
import "./gamespagination.css";
import { pagination } from "./Pagination";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { GAMECARD } from "../../LocalStorage";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const GamePagination = ({ isGamesPreview }) => {
  const [pageCount, setPageCount] = React.useState(0);

  GAMECARD.map((el) => console.log(el));

  console.log(GAMECARD.length);

  let currentItems = items;
  const hendlePaginationClick = (el) => {
    console.log(el, "click");
  };

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <li>
              <h3>Item #{item}</h3>
            </li>
          ))}
      </>
    );
  }

  return (
    <>
      <div className="games-experiences__video-page">
        <ul className="games-experiences__video-page-items">
          {pagination.map((el) => (
            <li key={el.id}>
              <button
                className="games-experiences__video-page-item-number"
                onClick={() => hendlePaginationClick(el)}
              >
                {" "}
                {el.text}{" "}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Items currentItems={currentItems} />

      <div className="games-experiences__video-page">
        <ReactPaginate
          className="games-experiences__video-page-items"
          breakLabel="..."
          nextClassName={"games-experiences__video-page-item-number"}
          nextLabel=">"
          // onPageChange={handlePageClick}
          pageClassName={"games-experiences__video-page-item-number"}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousClassName={"games-experiences__video-page-item-number"}
          // previousLinkClassName={'games-experiences__video-page-item-number'}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};
