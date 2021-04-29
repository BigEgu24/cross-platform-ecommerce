import React from 'react';
import {View, Platform, StatusBar, StyleSheet} from 'react-native';
import {Router, Route, Switch} from "../Router/index";

export default function Routes(props) {
    const myRoutes = props.Routes;
    return (
        <View style={styles.container}>
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
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS==="web" ? 0 : StatusBar.currentHeight
    }
})
