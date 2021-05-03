import { useAppContext } from '@wow/shared/Context/app-context';
import Card from '@wow/shared/Card/Card';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Newsfeed() {
    const {authReducer} = useAppContext();
    const {auth, authDispatch} = authReducer;
    let User = auth.auth;
    
    // const click = () => {
    //     productsDispatch({ type: 'SET_PRODUCTS', payload: [{id:1, name: 'eddie'}] })
    // }
    
    return (
        <View>
            {/* <Text>{JSON.stringify(products.products, null, 4)}</Text> 
            <TouchableOpacity onPress={() => click()}>
                <Text>Click Me</Text>
            </TouchableOpacity> */}
            <Card />
        </View>
    )
}
