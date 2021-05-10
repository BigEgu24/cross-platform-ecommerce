import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export default function Product(props) {
    return (
        <View style={styles.container}>
            <Text>Product</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 230,
        maxWidth: 230
    }
})