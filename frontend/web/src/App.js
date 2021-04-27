import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from '@wow/shared/SplashScreen/SplashScreen';
import Routes from '@wow/shared/Routes/Routes';
import "./App.scss";
import {routes} from "./Routes.js";

export default function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(!splash)
    }, 3000)
  }, [])

  return (
    <>
      {splash ? <SplashScreen /> : <Routes Routes={routes} />}
    </>
  );
}