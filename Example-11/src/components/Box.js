import React from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import { useLocale } from "../context/LocaleContext";
import messages from "../messages.json";

function Box() {
  const { setLocale, locale } = useLocale();

  const setLcl = (lcl) => {
    setLocale(lcl);
    localStorage.setItem("Locale", lcl);
  };
  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      <div className="Box">
        <div className="Row">
          <FormattedMessage id="title" />
        </div>
        <div className="Row">
          <FormattedMessage id="description" />
        </div>
        <br />
        <br />
        <span>Select a Language</span>
        <div className="Btn">
          <button className="LeftBtn" onClick={() => setLcl("tr-TR")}>
            TR
          </button>
          <button className="RightBtn" onClick={() => setLcl("en-US")}>
            EN
          </button>
        </div>
      </div>
    </IntlProvider>
  );
}

export default Box;
