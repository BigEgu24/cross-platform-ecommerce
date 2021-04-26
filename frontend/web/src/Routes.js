import React from "react";
import {View, Text} from "react-native";

export const routes = [
    {
      path: "/",
      render: <View><Text>Homepage!</Text></View>
    },
    {
      path: "/about",
      render: <View><Text>About!</Text></View>
    }
];