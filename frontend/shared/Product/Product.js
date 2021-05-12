import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import StarRating from 'react-native-star-rating';
export const Department = props => {
  // Pass the param props to the product
  console.log(props);
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, props.department));
};
export const Title = props => {
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, props.title));
};
export const Price = props => {
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, props.price.toFixed(2)));
};
export const Ratings = props => {
  return /*#__PURE__*/React.createElement(View, null);
};
const styles = StyleSheet.create({
  container: {
    width: 230,
    maxWidth: 230
  }
});