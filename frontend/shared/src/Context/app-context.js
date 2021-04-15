import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export const AppProvider = (props) => {
    const [number, setNumber] = useState(1);

    return(
        <AppContext.Provider value={{
            values: {
                number
            },
            functions: {
                setNumber
            }
        }}>
            {props.children}
        </AppContext.Provider>
    )
}