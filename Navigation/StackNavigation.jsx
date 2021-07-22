import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Home, Detail} from "../Screens/index";
import React from "react";

const Stack = createStackNavigator();

export default () => {
    return (

        <NavigationContainer initialRouteName="Home">
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        headerShown: false
                    }}                   

                />
               
                <Stack.Screen name="Detail" component={Detail} options={{
                    title: "Detalle",
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );


}