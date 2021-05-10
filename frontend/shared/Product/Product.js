import React from 'react';
import { View, Text, StyleSheet } from "react-native";
export default function Product(props) {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Text, null, "Product"));
}
const styles = StyleSheet.create({
  container: {
    width: 230,
    maxWidth: 230
  }
});