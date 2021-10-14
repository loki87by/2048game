// ***импорты
import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import "./Popup.css";
import "./styles/_opened/Popup_opened.css";
import "./styles/__container/Popup__container.css";
import "./styles/__text/Popup__text.css";
import "./styles/__smile/Popup__smile.css";
import "./styles/__smile-bigcircle/Popup__smile-bigcircle.css";
import "./styles/__smile-smallcircle/Popup__smile-smallcircle.css";
import "./styles/__smile-smallcircle/_left/Popup__smile-smallcircle_left.css";
import "./styles/__smile-smallcircle/_right/Popup__smile-smallcircle_right.css";
import "./styles/__smile-mimic/Popup__smile-mimic.css";
import "./styles/__smile-mimic/_type/Popup__smile-mimic_type_win.css";
import "./styles/__smile-mimic/_type/Popup__smile-mimic_type_loose.css";
import "./styles/__buttons/Popup__buttons.css";
import "./styles/__button/Popup__button.css";

// ***функционал
function Popup(props) {
  // **константы
  const translation = React.useContext(TranslationContext);
  let title;
  let next;
  let picColor;

  // **функции
  // *закрытие попапа
  function handleClick() {
    props.onClose();
    if (props.popupType === "loose") {
      props.setEndGame(true);
      props.setGameStarted(true);
    } else {
      props.restarter();
    }
  }

  function handleClickClose() {
    props.onClose();
    props.restarter();
  }

  // *настройка попапа
  function popupCreator() {
    if (props.popupType === "win") {
      title = translation.win;
      next = translation.continue;
      picColor = "greenyellow";
    } else {
      title = translation.loose;
      picColor = "orangered";
    }
  }
  popupCreator();

  // **DOM
  return (
    <section
      className={`Popup ${props.isOpen && "Popup_opened"}`}
      id={props.popupType}
    >
      <div className="Popup__container" name={props.popupType}>
        <h1 className="Popup__text">{title}</h1>
        <figure className="Popup__smile">
          <div
            className="Popup__smile-bigcircle"
            style={{ borderColor: picColor }}
          ></div>
          <div
            className="Popup__smile-smallcircle Popup__smile-smallcircle_left"
            style={{ borderColor: picColor, backgroundColor: picColor }}
          ></div>
          <div
            className="Popup__smile-smallcircle Popup__smile-smallcircle_right"
            style={{ borderColor: picColor, backgroundColor: picColor }}
          ></div>
          <div
            style={{ borderTopColor: picColor }}
            className={`Popup__smile-mimic ${
              props.popupType === "win" && "Popup__smile-mimic_type_win"
            } ${
              props.popupType === "loose" && "Popup__smile-mimic_type_loose"
            } `}
          ></div>
        </figure>
        <div className="Popup__buttons">
          <button className="Popup__button" type="button" onClick={handleClick}>
            {props.popupType === "loose"
              ? translation.thanxNo
              : translation.restart}
          </button>
          {props.popupType === "win" ? (
            <button
              type="button"
              className="Popup__button"
              onClick={props.onClose}
            >
              {next}
            </button>
          ) : (
            <button
              className="Popup__button"
              type="button"
              onClick={handleClickClose}
            >
              {translation.restart}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

// ***экспорт
export default Popup;
