import { createContext, useContext, useState } from "react";

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("");

  const values = {
    locale,
    setLocale,
  };

  return (
    <LocaleContext.Provider value={values}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
