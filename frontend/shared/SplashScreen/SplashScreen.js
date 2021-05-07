import { View, Image, StyleSheet, StatusBar } from 'react-native';
import Animated, { withRepeat, useSharedValue, interpolate, useAnimatedStyle, useDerivedValue, withTiming, runOnJS } from 'react-native-reanimated';
import React, { useEffect } from 'react';
import { useAppContext } from '../Context/app-context';
import Logo from '../Logo/Logo';

const SplashScreen = () => {
  const {
    utilsReducer
  } = useAppContext();
  const {
    UTILS_ACTIONS,
    utils,
    utilsDispatch
  } = utilsReducer;
  let splash = utils.splash;
  const animation = useSharedValue(0);
  const translate = useDerivedValue(() => {
    return interpolate(animation.value, [0, 360], [0, 360]);
  });
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        translateY: -translate.value
      }]
    };
  });

  function callback() {
    utilsDispatch({
      type: UTILS_ACTIONS.SET_SPLASH,
      payload: !splash
    });
  }

  const startAnimation = prop => {
    "worklet";

    animation.value = withRepeat(withTiming(50, {
      duration: 800
    }), 10, true, finished => {
      runOnJS(callback)();
    });
  };

  useEffect(() => {
    runOnJS(startAnimation)('can pass arguments too');
  }, []);
  const logo = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
  };
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(StatusBar, {
    animated: true,
    backgroundColor: "#000",
    barStyle: "light-content"
  }), /*#__PURE__*/React.createElement(Animated.View, {
    style: animationStyle
  }, /*#__PURE__*/React.createElement(Logo, {
    fill: "#fff",
    height: "60",
    width: "60"
  })));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  logo: {
    width: 100,
    height: 100
  }
});
export default SplashScreen;