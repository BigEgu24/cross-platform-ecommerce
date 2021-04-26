import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

function getColor() {
  return (
    '#' +
    ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6)
  );
}
function hexToRGB(h) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length == 4) {
    r = '0x' + h[1] + h[1];
    g = '0x' + h[2] + h[2];
    b = '0x' + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = '0x' + h[1] + h[2];
    g = '0x' + h[3] + h[4];
    b = '0x' + h[5] + h[6];
  }

  return 'rgb(' + +r + ',' + +g + ',' + +b + ')';
}

export default function Graph(props) {
  const color = useSharedValue(hexToRGB(getColor()));
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(color.value, {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
      }),
    };
  });
  useEffect(() => {
    setInterval(() => {
      color.value = hexToRGB(getColor())
    }, 1000);
  },[])
  
  return (
    <View style={styles.container}>
      {/* <Animated.View style={[{height: '100%', width: '100%'}, style]} /> */}
      <Text style={styles.text}>Logo!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
  },
  text:{
    color: '#fff'
  }
});