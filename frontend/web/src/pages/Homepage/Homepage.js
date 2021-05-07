import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { useAppContext } from '@wow/shared/Context/app-context';
import {View, Text} from "react-native";

export default function Homepage() {
    const {productsReducer} = useAppContext();
    const {products} = productsReducer;
    let Products = products.products;
    console.log(Products)
    return (
        <View>
            <Navbar />
            {
                Products.map((product, index) => {
                    console.log(product)
                    return(
                        <div>
                            {product.desc}
                        </div>
                    )
                    
                })
            }
        </View>
    )
}
