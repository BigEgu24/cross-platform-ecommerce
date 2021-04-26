import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Graph from '@wow/shared/Graph/Graph';
import Routes from '@wow/shared/Routes/Routes';
import "./App.scss";
import {routes} from "./Routes.js";

export default function App(props) {
  
  return <Routes Routes={routes} />;
  // return (
  //   <div className="graph">
  //     <View style={styles.container}>
  //       <Graph />
  //     </View>
  //   </div>
  // );
}


const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 230
  }
})