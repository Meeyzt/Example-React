import React from "react";

function Box({ FormattedMessage }) {
  return (
    <div className="Box">
      <div className="Row">
        <FormattedMessage messages />
      </div>
      <div className="Row">
        <FormattedMessage />
      </div>
      <br />
      <br />
      <div className="Btn">
        <button className="LangBtn">TR</button>
        <button className="LangBtn">EN</button>
      </div>
    </div>
  );
}

export default Box;
