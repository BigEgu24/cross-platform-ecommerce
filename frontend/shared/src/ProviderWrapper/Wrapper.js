import React, {useEffect} from 'react';
import {
    View,
    Text,
    Platform,
    SafeAreaView,
    StyleSheet,
    StatusBar
} from 'react-native';
import { useAppContext } from "../Context/app-context";
import SplashScreen from "../SplashScreen/SplashScreen";
import Routes from "../Routes/Routes";

export default function Wrapper(props) {
    const {utilsReducer} = useAppContext();
    const {utils, utilsDispatch} = utilsReducer;
    let splash = utils.splash;
    
    return (
        <View style={styles.container}>
            {/* {splash ? <SplashScreen /> : <Routes Routes={props.routes}/>} */}
            <Routes Routes={props.routes}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
})