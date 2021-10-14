// **импорты
import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import "./Footer.css";
import "./styles/__text/Footer__text.css";
import "./styles/__input/Footer__input.css";

// **функционал
function Footer() {
  const [colorValue, setColorValue] = React.useState("#000000");
  const translation = React.useContext(TranslationContext);

  function changeColorValue(e) {
    setColorValue(e.target.value);
  }

  React.useEffect(() => {
    const html = document.querySelector("html");
    html.style = `--bg-color: ${colorValue}`;
  }, [colorValue]);
  // *DOM
  return (
    <footer className="Footer">
      <p className="Footer__text">{translation.background} </p>
      <input
        type="color"
        className="Footer__input"
        defaultValue={colorValue}
        onInput={changeColorValue}
      ></input>
    </footer>
  );
}
// **импорт
export default Footer;
