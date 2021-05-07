import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Index from '@wow/shared/ProviderWrapper/Index';
import {routes} from "./Routes.js";
import "./App.scss";

const ProviderWrapper = () => {
    return (
    <>
        <style type="text/css">{`
            @font-face {
            font-family: 'MaterialIcons';
            src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
            }
            @font-face {
            font-family: 'FontAwesome';
            src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
            }
      `}</style>
        <Index routes={routes}/>
    </>
    )
}

AppRegistry.registerComponent('App', () => ProviderWrapper);
AppRegistry.runApplication('App', { 
    rootTag: document.getElementById('root') 
});