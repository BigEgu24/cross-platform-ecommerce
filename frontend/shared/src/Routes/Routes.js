import React from 'react';
import {
    Platform, 
    StatusBar, 
    StyleSheet,
    SafeAreaView
} from 'react-native';
import {Router, Route, Switch} from "../Router/index";

export default function Routes(props) {
    const myRoutes = props.Routes;
    return (
        <SafeAreaView style={styles.container}>
            <Router>
                <Switch>
                    {
                        myRoutes.map((route, index) => {
                            return <Route path={route.path} exact render={() => {
                                return route.render;
                            }} key={index}/>
                        })
                    }
                </Switch>
            </Router>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
})