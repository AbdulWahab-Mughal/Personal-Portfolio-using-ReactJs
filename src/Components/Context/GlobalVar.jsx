import { createContext, useState } from "react";

const GlobalVarContext = createContext({});

const GlobalVarProvider = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);

  const objToSend = {
    isToggle,
    setIsToggle,
  };

  return (
    <GlobalVarContext.Provider value={objToSend}>
      {children}
    </GlobalVarContext.Provider>
  );
};

export { GlobalVarContext, GlobalVarProvider };
