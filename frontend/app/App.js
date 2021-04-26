import React, {Fragment} from 'react';
import {
  View,
  Text,
} from 'react-native';
 
 import Routes from "@wow/shared/Routes/Routes";
 import Graph from "@wow/shared/Graph/Graph";

 const App = () => {
  const isHermes = () => !!global.HermesInternal;
  if (!isHermes) {
    console.log("Hermes is not enabled");
  } else {
    console.log("Hermes is enabled");
  }
  const routes = [
    {
      path: "/",
      render: <View><Text>Homepage!!</Text></View>
    },
    {
      path: "/about",
      render: <View><Text>About!</Text></View>
    }
  ];
  return (
    <>
      <Graph />
      {/* <Routes Routes={routes}/> */}
    </>
  );
  //  return <Graph />;
 };
 
 export default App;