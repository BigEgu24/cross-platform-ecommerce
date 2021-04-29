import React from 'react';
import { View, Platform, StatusBar, StyleSheet } from 'react-native';
import { Router, Route, Switch } from "../Router/index";
export default function Routes(props) {
  const myRoutes = props.Routes;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Switch, null, myRoutes.map((route, index) => {
    return /*#__PURE__*/React.createElement(Route, {
      path: route.path,
      exact: true,
      render: () => {
        return route.render;
      },
      key: index
    });
  }))));
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "web" ? 0 : StatusBar.currentHeight
  }
});