import React, {useEffect, useReducer} from 'react';
import { AppProvider } from "../Context/app-context";
import Wrapper from "./Wrapper";
import { getData } from '../utils/axios';

export default function Index(props) {
    return (
        <AppProvider>
            <Wrapper routes={props.routes} />
        </AppProvider>
    )
}