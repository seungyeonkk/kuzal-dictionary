import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import { theme } from "../style/theme";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Note from "../pages/Note";


const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                height: 100,
                backgroundColor: theme.background,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
                color: theme.white
            }
        }}>
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="Detail" component={Detail}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: theme.white,
                    title: ""
              }}
            />
            <Stack.Screen name="Note" component={Note}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: theme.white,
                    title: ""
              }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;
