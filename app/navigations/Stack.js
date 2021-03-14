import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { theme } from "../style/theme";


const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                height: 100,
                backgroundColor: theme.background,
            },
            headerTitleStyle: {
                color: theme.white
            }
        }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    );
};

export default StackNavigation;
