import React from "react";
import "./ellipse-games.css";
import {
  AddCard,
  DialogGameCard,
  GamesFilter,
  GamesPreview,
  GamesEmpty,
  GAMECARD,
} from "../../components";

const itemsCardPerPageDesk = 5;
const itemsCardPerPageMob = 3;
let itemOffset = 0;
let endOffset;
export const Games = ({ isUserAuth }) => {
  const [itemsCardPerPage, setitemsCardPerPage] = React.useState(
    window.innerWidth < 530 ? itemsCardPerPageMob : itemsCardPerPageDesk
  );
  const [isGamesPreview, setGamesPreview] = React.useState(
    GAMECARD.slice(itemOffset, endOffset)
  );
  const [isSortGames, setSortGames] = React.useState(null);
  const [gameCard, setGameCard] = React.useState(false);
  const [addGameCard, setAddGameCard] = React.useState(false);
  const [pageCountGame, setPageCountGame] = React.useState(
    GAMECARD.length ? Math.ceil(GAMECARD.length / itemsCardPerPage) : 0
  );
  endOffset = itemOffset + itemsCardPerPage;

  React.useEffect(
    () => {
      const handleResize = () => {
        if (window.innerWidth > 530) {
          setitemsCardPerPage(itemsCardPerPageDesk);
        }
        if (window.innerWidth < 530) {
          setitemsCardPerPage(itemsCardPerPageMob);
        }
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      setGamesPreview(GAMECARD.slice(itemOffset, endOffset));
      setPageCountGame(Math.ceil(GAMECARD.length / itemsCardPerPage));

      return () => window.removeEventListener("resize", handleResize);
    },
    [itemsCardPerPage],
    [GamesPreview]
  );

  const handlePageClick = (event) => {
    itemOffset = (event.selected * itemsCardPerPage) % GAMECARD.length;
    endOffset = itemOffset + itemsCardPerPage;
    setGamesPreview(GAMECARD.slice(itemOffset, endOffset));
  };

  const sortChange = (e) => {
    setSortGames(e.target.value);
  };

  const ChangeGamecard = React.useCallback(
    () => {
      switch (isSortGames) {
        case "newfirst":
          return GAMECARD.sort((a, b) => b.date - a.date);
        case "newlast":
          return GAMECARD.sort((a, b) => a.date - b.date);
        default:
          return GAMECARD;
      }
    },
    [isSortGames],
    [GAMECARD]
  );

  React.useEffect(
    () => {
      let res = ChangeGamecard().slice(itemOffset, endOffset);
      setGamesPreview([...res]);
    },
    [ChangeGamecard],
    [isGamesPreview]
  );

  const handleAddGameCardOpen = () => {
    setAddGameCard(true);
  };
  const DialogAddGameCardClose = () => {
    setAddGameCard(false);
  };
  const handleSetGameCard = (e) => {
    setGameCard(e);
  };
  const handleSetGameCardClose = (e) => {
    setGameCard(false);
  };

  return (
    <>
      <div className="ellipse-games">
        <div className="ellipse-games-el1"></div>
        <div className="ellipse-games-el2"></div>
        <div className="ellipse-games-el3"></div>
        <div className="ellipse-games-el4"></div>
        <div className="ellipse-games-el5"></div>
        <div className="ellipse-games-el6"></div>
      </div>
      <GamesFilter
        sortChange={sortChange}
        handleAddGameCardOpen={handleAddGameCardOpen}
        isUserAuth={isUserAuth}
      />
      {isGamesPreview && (
        <GamesPreview
          setGamesPreview={setGamesPreview}
          isGamesPreview={isGamesPreview}
          handleSetGameCard={handleSetGameCard}
          handleSetGameCardClose={handleSetGameCardClose}
          itemOffset={itemOffset}
          pageCountGame={pageCountGame}
          handlePageClick={handlePageClick}
        />
      )}

      {!isGamesPreview && <GamesEmpty />}

      {gameCard && (
        <DialogGameCard
          gameCard={gameCard}
          closeDialog={handleSetGameCardClose}
        />
      )}

      {addGameCard && (
        <AddCard
          handleAddGameCardOpen={handleAddGameCardOpen}
          DialogAddGameCardClose={DialogAddGameCardClose}
          itemsCardPerPage={itemsCardPerPage}
          setPageCountGame={setPageCountGame}
          itemOffset={itemOffset}
          endOffset={endOffset}
          setGamesPreview={setGamesPreview}
        />
      )}
    </>
  );
};

// // function useWindowSize() {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = React.useState({
//     width: undefined,
//     height: undefined,
//   });
//   React.useEffect(() => {
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state

//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     // Add event listener
//     window.addEventListener("resize", handleResize);
//     // Call handler right away so state gets updated with initial window size
//     handleResize();
//     // Remove event listener on cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // Empty array ensures that effect is only run on mount
//   return windowSize;
// }
