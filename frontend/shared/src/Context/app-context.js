import React, { useState, useContext, useEffect, useReducer } from "react";
import { getData } from "../utils/axios/index";
import posts from "../utils/posts/posts";
import { PRODUCTS_ACTIONS, productsReducer, productsState } from "../utils/Reducers/ProductsReducer";
import { AUTH_ACTIONS, authReducer, authState } from "../utils/Reducers/AuthReducer";

const AppContext = React.createContext();

export function useAppContext() {
    return useContext(AppContext);
}


export const AppProvider = (props) => {
    const [splash, setSplash] = useState(true);
    const [products, productsDispatch] = useReducer(productsReducer, productsState)
    const [auth, authDispatch] = useReducer(authReducer, authState)

    useEffect(() => {
        const fetchData = async() => {
            const data = await getData("https://ecommerce-api808.herokuapp.com/api/products/")
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