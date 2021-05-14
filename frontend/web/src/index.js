import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Index from '@wow/shared/ProviderWrapper/Index';
import {routes} from "./Routes.js";
import "./App.scss";

const ProviderWrapper = () => {
    return (
    <>
        <Index routes={routes}/>
    </>
    )
}

AppRegistry.registerComponent('App', () => ProviderWrapper);
AppRegistry.runApplication('App', { 
    rootTag: document.getElementById('root') 
});