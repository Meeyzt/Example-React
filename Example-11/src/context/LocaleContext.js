import { createContext, useContext, useState } from "react";

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const localLanguage = localStorage.getItem("Locale");
  const [locale, setLocale] = useState(
    localLanguage ? localStorage.Locale : "tr-TR"
  );

  const values = {
    locale,
    setLocale,
  };

  return (
    <LocaleContext.Provider value={values}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
