import React from 'react';
import { AppProvider } from "../Context/app-context";
import Wrapper from "./Wrapper";
import {View, Text} from "react-native";

export default function Index(props) {
    return (
        <AppProvider>
            <Wrapper routes={props.routes} />
        </AppProvider>
    )
}