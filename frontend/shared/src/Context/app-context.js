import React, { useState, useContext, useEffect, useReducer } from "react";
import { getData } from "../utils/axios/index";
import { PRODUCTS_ACTIONS, productsReducer, productsState } from "../utils/Reducers/ProductsReducer";
import { AUTH_ACTIONS, authReducer, authState } from "../utils/Reducers/AuthReducer";
import { UTILS_ACTIONS, utilsReducer, utilsState } from "../utils/Reducers/UtilsReducer";
import dotenv from "../utils/variables/dotenv";

const AppContext = React.createContext();

export function useAppContext() {
    return useContext(AppContext);
}


export const AppProvider = (props) => {
    const [products, productsDispatch] = useReducer(productsReducer, productsState)
    const [auth, authDispatch] = useReducer(authReducer, authState)
    const [utils, utilsDispatch] = useReducer(utilsReducer, utilsState)
    const {api, token} = dotenv();
    console.log(api)
    console.log(token)

    useEffect(() => {
        const fetchData = async() => {
            const data = await getData(`${api}/api/products/`);
            productsDispatch({ type: PRODUCTS_ACTIONS.SET_PRODUCTS, payload: data })
        }
        fetchData()
    }, [])
    
    return(
        <AppContext.Provider value={{
            productsReducer: {
                PRODUCTS_ACTIONS,
                productsDispatch,
                products
            },
            authReducer: {
                AUTH_ACTIONS,
                authDispatch,
                auth
            },
            utilsReducer: {
                UTILS_ACTIONS,
                utilsDispatch,
                utils
            }
        }}>
            {props.children}
        </AppContext.Provider>
    )
}