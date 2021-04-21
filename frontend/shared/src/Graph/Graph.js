import React from 'react';
import {View, Button} from 'react-native';

export default function Graph() {
    return (
        <View>
            <Button
                title="toggle"
                onPress={() => {
                    animateOnClick()
                }}
            />
        </View>
    )
}
