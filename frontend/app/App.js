import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions
} from 'react-native';
 import Routes from "@wow/shared/Routes/Routes";
 import SplashScreen from "@wow/shared/SplashScreen/SplashScreen";
 import {CI} from "@env"

 const App = () => {
  const [splash, setSplash] = useState(true);
  // const isHermes = () => !!global.HermesInternal;
  // if (!isHermes) {
  //   console.log("Hermes is not enabled");
  // } else {
  //   console.log("Hermes is enabled");
  // }
  useEffect(() => {
    setTimeout(() => {
      setSplash(!splash)
    }, 3000)
  }, [])

  const routes = [
    {
      path: "/",
      render: <View><Text>Homepage!!</Text></View> // Switch statement!!
    },
    {
      path: "/about",
      render: <View><Text>About!</Text></View>
    }
  ];

  return (
    <View style={styles.container}>
      {splash ? <SplashScreen /> : <Routes Routes={routes}/>}
    </View>
  );
 };
 
 export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  routes: {
    height: 500
  },
  scrollView: {
    backgroundColor: 'pink'
  }
})