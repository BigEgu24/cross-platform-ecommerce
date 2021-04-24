import React from 'react';
import { Platform, View, Text } from "react-native";

export default function Card() {
    console.log(Platform.OS)
    return (
        <View>
            <Text>Card!</Text>
        </View>
    )
}
