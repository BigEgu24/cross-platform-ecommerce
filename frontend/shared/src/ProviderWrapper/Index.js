import React from 'react';
import { AppProvider } from "@wow/shared/Context/app-context";
import Wrapper from "./Wrapper";
import {View, Text} from "react-native";

export default function Index(props) {
    // return (
    //     <AppProvider>
    //         {/* <Wrapper routes={props.routes} /> */}
    //     </AppProvider>
    // )
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}