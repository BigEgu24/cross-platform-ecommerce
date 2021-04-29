import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Router, Route, Switch } from "../Router/index";
export default function Routes(props) {
  const myRoutes = props.Routes;
  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Switch, null, myRoutes.map((route, index) => {
    return /*#__PURE__*/React.createElement(Route, {
      path: route.path,
      exact: true,
      render: () => {
        return route.render;
      },
      key: index
    });
  })));
}