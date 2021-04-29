import React, { useState, useContext, useEffect } from "react";
const AppContext = /*#__PURE__*/React.createContext();
export function useAppContext() {
  return useContext(AppContext);
}
export const AppProvider = props => {
  const [splash, setSplash] = useState(true);
  return /*#__PURE__*/React.createElement(AppContext.Provider, {
    value: {
      functions: {
        setSplash
      },
      values: {
        splash
      }
    }
  }, props.children);
};