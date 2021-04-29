import React from 'react';
import { AppProvider } from "../Context/app-context";
import Wrapper from "./Wrapper";
import { View, Text } from "react-native";
export default function Index(props) {
  return /*#__PURE__*/React.createElement(AppProvider, null, /*#__PURE__*/React.createElement(Wrapper, {
    routes: props.routes
  }));
}