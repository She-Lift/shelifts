import { createContext, useEffect, useState } from "react";
import sweText from "./data/sweText.jsx";
import engText from "./data/engText.jsx";

const GlobalContext = createContext(null);

function GlobalProvider({ children }) {
  const [language, setLanguage] = useState("sv");
  const [textData, setTextData] = useState(sweText);

  function toggleLanguage() {
    if (language == "sv") {
      setLanguage("en");
    } else {
      setLanguage("sv");
    }
  }

  useEffect(() => {
    if (language == "sv") {
      setTextData(sweText);
    } else {
      setTextData(engText);
    }
  }, [language]);

  return <GlobalContext.Provider value={{ textData, toggleLanguage }}>
    {children}
  </GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };