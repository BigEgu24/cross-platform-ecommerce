import { View, Image, StyleSheet, Text } from 'react-native';
import Animated, {
  withRepeat,  
  useSharedValue, 
  interpolate, 
  useAnimatedStyle, 
  useDerivedValue, 
  withTiming 
} from 'react-native-reanimated';
import React, {useEffect} from 'react';
import { useAppContext } from '@wow/shared/Context/app-context';


const SplashScreen = () => {
  const {values, functions} = useAppContext();
  const {splash} = values;
  const {setSplash} = functions;

  const animation = useSharedValue(0)

  const rotation = useDerivedValue(() => {

    return interpolate(animation.value,
      [0,200],
      [0,200])
  })

  const animationStyle = useAnimatedStyle(() => {
    return{

      transform:[
        {
          translateY: -rotation.value
        }
      ]
    }
  })
  const startAnimation = () => {
    animation.value = withRepeat(
    withTiming(70, { duration: 1100 }, (finished, currentValue) => {
      // if (finished) {
      //   console.log('current withRepeat value is ' + currentValue);
      // } else {
      //   console.log('inner animation cancelled');
      // }
    }),
    10,
    true,
    (finished) => {
      if(finished === true){
        setSplash(!splash)
      }
    }
    )
  }
  useEffect(() => {
    startAnimation()
  }, [])
  
  const logo = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" };
  return (
    <View style={styles.container}>
      <Animated.View style={animationStyle}>
        <Image source={logo} style={[styles.logo]}/>
      </Animated.View>
      <Text style={{ color: '#fff' }}>{splash ? "Splash" : "Homepage"}</Text>
    </View>
  );
}

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