import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export const AppProvider = (props) => {
    const [splash, setSplash] = useState(true);
    
    return(
        <AppContext.Provider value={{
            functions: {
                setSplash
            },
            values: {
                splash
            }
        }}>
            {props.children}
        </AppContext.Provider>
    )
}