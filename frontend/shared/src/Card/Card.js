import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { useAppContext } from '../Context/app-context';

export default function Card() {
    const {productsReducer} = useAppContext();
    const {products, productsDispatch} = productsReducer;
    let allProducts = products.products;

    return (
        <View style={styles.container}>
            {/* <Text>{JSON.stringify(products.products, null, 4)}</Text> */}
            {
                allProducts.map((product, index) => {
                    return(
                        <View style={styles.card} key={index}>
                            <Text>
                                {product.title}
                            </Text>
                            <Text>
                                {product.description}
                            </Text>
                            <Text>
                                ${product.price}
                            </Text>
                        </View>
                    )
                })
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#989898'
    },
    card: {
        backgroundColor: "#F5FCFF",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        width: "100%",
        maxWidth: 425,
        height: 200,
        padding: 10,
        marginBottom: 12,
    }
})