import React, {useEffect} from 'react';
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { useAppContext } from "@wow/shared/Context/app-context";
//import SplashScreen from "@wow/shared/SplashScreen/SplashScreen";
import Routes from "@wow/shared/Routes/Routes";

export default function Wrapper(props) {
    const { values } = useAppContext();
    const { splash } = values;
    useEffect(() => {
        console.log(splash)
    }, [splash])
    return (
        <View style={styles.container}>
            {/* {splash ? <SplashScreen /> : <Routes Routes={props.routes}/>} */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
})