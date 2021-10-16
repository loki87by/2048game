// **импорты
import React from "react";
import {
  TranslationContext,
  translations,
} from "../../contexts/translationContext";
import { newgame } from "../../utils/helpers";
import { GAME } from "../../utils/consts";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Popup from '../Popup/Popup'
import "../../vendor/normalize.css";
import "./App.css";
import "./styles/__text-container/App__text-container.css";
import "./styles/__text-container/_opened/App__text-container_opened.css";
import "./styles/__rules-text/App__rules-text.css";
import "./styles/__rules-span/App__rules-span.css";
import "./styles/__rules-text/_gameStarted/App__rules-text_gameStarted.css";
import "./styles/__restart-button/App__restart-button.css";
import "./styles/__restart-button/App__restart-button_symbol.css";

function App() {
  // **стейты
  const [lang, setLang] = React.useState("ru");
  const [rulesOpen, setRulesOpen] = React.useState(false);
  const [gameStarted, setGameStarted] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [endGame, setEndGame] = React.useState(false);
  const [popupOpened, setPopupOpened] = React.useState(false);
  const [popupType, setPopupType] = React.useState("");
  const Mobile =
    /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      navigator.userAgent
    );
  const mobileRef = React.useRef(Mobile);

  // *перезапуск геймплея
  function restarter() {
    const gameField = document.querySelector('.GameField')
    gameField.setAttribute('style', 'background-color: rgb(128, 128, 127)')
    setEndGame(true);
    newgame(GAME);
    setGameStarted(true);
    setScore(0);
  }

  function toggleRules() {
    const state = !rulesOpen;
    setRulesOpen(state);
  }

  function oneMoreStart() {
    toggleRules()
    restarter()
  }

  // **проверка типа устройства пользователя
  React.useEffect(() => {
    setInterval(() => {
      const Mobile =
        /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
          navigator.userAgent
        );
      mobileRef.current = Mobile;
    }, 15000);
  });

  // **функции закрытия попапа
  // *закрытие попапа
  function handlePopupClose() {
    setPopupOpened(false);
    setPopupType("");
  }
  // *закрытие по esc
  function handleEscClose(e) {
    if (e.key === "Escape") {
      handlePopupClose();
    }
  }
  // *закрытие по оверлею
  function handleClickClose(e) {
    if (e.target.classList.contains("Popup_opened")) {
      handlePopupClose();
    }
  }
  // *слушатели закрытий
  React.useEffect(() => {
    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("click", handleClickClose);
  });

  // **DOM
  return (
    <>
      <TranslationContext.Provider value={translations[lang]}>
        <Header
          toggleRules={toggleRules}
          gameStarted={gameStarted}
          score={score}
          setLang={setLang}
          lang={lang}
        />
        <div
          className={`App__text-container ${
            rulesOpen && "App__text-container_opened"
          }`}
        >
          <p
            className={`App__rules-text ${
              gameStarted && "App__rules-text_gameStarted"
            }`}
          >
            {mobileRef.current
              ? translations[lang].mobileRules
              : translations[lang].rules}
          </p>
          {endGame ? (
            gameStarted ? (
              ""
            ) : (
              <>
                <span className="App__rules-span">
                  {translations[lang].gameOver}
                </span>
                <button
                  className="App__restart-button"
                  type="button"
                  onClick={oneMoreStart}
                >
                  {translations[lang].restart}
                </button>
              </>
            )
          ) : gameStarted ? (
            ""
          ) : (
            <span className="App__rules-span">
              {mobileRef.current
                ? translations[lang].prestartMobile
                : translations[lang].prestart}
            </span>
          )}
        </div>
        <Main
          gameStarted={gameStarted}
          restarter={restarter}
          endGame={endGame}
          setEndGame={setEndGame}
          score={score}
          setScore={setScore}
          setGameStarted={setGameStarted}
          isMobile={mobileRef.current}
          setRulesOpen={setRulesOpen}
          setPopupOpened={setPopupOpened}
          setPopupType={setPopupType}
        />
        <Footer />
        <Popup
        isOpen={popupOpened}
        onClose={handlePopupClose}
        popupType={popupType}
        setEndGame={setEndGame}
        restarter={restarter} />
      </TranslationContext.Provider>
    </>
  );
}

// **экспорт
export default App;
