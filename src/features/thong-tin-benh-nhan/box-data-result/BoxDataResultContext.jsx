import { createContext, useContext, useState } from "react";

const BoxDataResultContext = createContext({ setContext: () => {}, data: [] });

export default BoxDataResultContext;

export const BoxDataResultContextProvider = ({ children }) => {
  const [context, setContext] = useState({});

  return (
    <BoxDataResultContext.Provider value={{ ...context, setContext }}>
      {children}
    </BoxDataResultContext.Provider>
  );
};

export const useBoxDataResultContext = () => useContext(BoxDataResultContext);
