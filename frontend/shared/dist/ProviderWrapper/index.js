import React, { useEffect, useReducer } from 'react';
import { AppProvider } from "../Context/app-context";
import Wrapper from "./Wrapper";
import { getData } from '../utils/axios';
export default function Index(props) {
  return /*#__PURE__*/React.createElement(AppProvider, null, /*#__PURE__*/React.createElement(Wrapper, {
    routes: props.routes
  }));
}