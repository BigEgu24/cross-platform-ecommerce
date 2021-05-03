import React from "react";
import {View, Text} from "react-native";
import Newsfeed from "./scenes/Newsfeed/Newsfeed";

export const routes = [
    {
      path: "/",
      render: <Newsfeed />
    },
    {
      path: "/about",
      render: <View><Text>About!</Text></View>
    }
];