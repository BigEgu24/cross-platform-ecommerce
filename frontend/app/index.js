import 'react-native-gesture-handler';
import React from 'react';
import {name as appName} from './app.json';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Index from '@wow/shared/ProviderWrapper/Wrapper';
import {routes} from "./Routes.js";

const ProviderWrapper = () => {
    // return <Index routes={routes}/>
    return(
        <View><Text>Hello</Text></View>
    )
}

AppRegistry.registerComponent(appName, () => ProviderWrapper);
