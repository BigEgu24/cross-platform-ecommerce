import { View, Image, StyleSheet, Text } from 'react-native';
import Animated, { withRepeat, useSharedValue, interpolate, useAnimatedStyle, useDerivedValue, withTiming, runOnJS } from 'react-native-reanimated';
import React, { useEffect } from 'react';
import { useAppContext } from '../Context/app-context';

const SplashScreen = () => {
  const {
    values,
    functions
  } = useAppContext();
  const {
    splash
  } = values;
  const {
    setSplash
  } = functions;
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

  const startAnimation = () => {
    animation.value = withRepeat(withTiming(35, {
      duration: 1100
    }), -1, false, finished => {
      // const resultStr = finished
      // ? 'All repeats are completed'
      // : 'withRepeat cancelled';
      console.log(finished);
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
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: animationStyle
  }, /*#__PURE__*/React.createElement(Image, {
    source: logo,
    style: [styles.logo]
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