import React, { createContext, useContext, useState } from "react";

const PopupContext = createContext();

const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const login = useState(false);
  const signup = useState(false);
  const value = { login, signup };
  return <PopupContext.Provider {...{ value, children }} />;
};

export default usePopup;
