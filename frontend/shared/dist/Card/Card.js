import React from 'react';
import { Platform, View, Text } from "react-native";
export default function Card() {
  console.log(Platform.OS);
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, "Card"));
}