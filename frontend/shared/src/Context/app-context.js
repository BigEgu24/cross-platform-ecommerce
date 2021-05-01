import React, { useState, useContext, useEffect, useReducer } from "react";
import { getData } from "../utils/axios/index";
import posts from "../utils/posts/posts";
import { ACTIONS, ProductsReducer, ProductsState } from "../utils/Reducers/ProductsReducer";

const AppContext = React.createContext();

export function useAppContext() {
    return useContext(AppContext);
}


export const AppProvider = (props) => {
    const [splash, setSplash] = useState(true);
    const [products, productsDispatch] = useReducer(productsReducer, productsState)

    useEffect(() => {
        const fetchData = async() => {
            const data = await getData("https://ecommerce-api808.herokuapp.com/api/products/")
            productsDispatch({ type: ACTIONS.SET_PRODUCTS, payload: data })
        }
        fetchData()
    }, [])
    
    return(
        <AppContext.Provider value={{
            productsReducer: {
                productsDispatch,
                products
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