import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import StarRating from 'react-native-star-rating';

export const Department = (props) => {
    // Pass the param props to the product
    console.log(props)
    return (
        <View>
            <Text>{props.department}</Text>
        </View>
    )
}
export const Title = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )
}

export const Price = (props) => {
    return (
        <View>
            <Text>{props.price.toFixed(2)}</Text>
        </View>
    )
}

export const Ratings = (props) => {
    return (
        <View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 230,
        maxWidth: 230
    }
})