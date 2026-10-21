import { createContext, useState } from "react";

const GlobalContext = createContext(null);

function GlobalProvider({ children }) {
  const [language, setLanguage] = useState("sv");

  function toggleLanguage() {
    if (language == "sv") {
      setLanguage("en");
    } else {
      setLanguage("sv");
    }
  }

  return <GlobalContext.Provider value={{ language, toggleLanguage }}>
    {children}
  </GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };