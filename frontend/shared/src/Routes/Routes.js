import React from 'react';
import {View, Text, Platform} from 'react-native';
import {Router, Route, Switch} from "../Router/index";

export default function Routes(props) {
    const myRoutes = props.Routes;
    return (
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
    )
}
