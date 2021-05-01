import React from "react";
import {View, Text} from "react-native";
import Homepage from "./pages/Homepage/Homepage";

export const routes = [
    {
      path: "/",
      render: <Homepage />
    },
    {
      path: "/about",
      render: <View><Text>About!</Text></View>
    }
];