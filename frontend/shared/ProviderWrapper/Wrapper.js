import React, { useEffect } from 'react';
import { View, Text, Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { useAppContext } from "../Context/app-context";
import SplashScreen from "../SplashScreen/SplashScreen";
import Routes from "../Routes/Routes";
export default function Wrapper(props) {
  const {
    utilsReducer
  } = useAppContext();
  const {
    utils,
    utilsDispatch
  } = utilsReducer;
  let splash = utils.splash;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, splash ? /*#__PURE__*/React.createElement(SplashScreen, null) : /*#__PURE__*/React.createElement(Routes, {
    Routes: props.routes
  }));
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});