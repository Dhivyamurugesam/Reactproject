import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import FristScreen from "../screens/FristScreen";
import SecondScreen from "../screens/SecondScreen";
import CreateScreen from "../screens/CreateScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import AuthorScreen from "../screens/Author/AuthorScreen";
import Authordetails from "../screens/Author/Authordetails";

const stack = createStackNavigator();

const ApplicationNavigator = () => {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
                <stack.Screen name="Author" component={AuthorScreen} />
                <stack.Screen name="Authordetails" component={Authordetails}/>
                
                {/* <stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <stack.Screen name="FristScreen" component={FristScreen} />
                <stack.Screen name="LoginScreen" component={LoginScreen} />
                <stack.Screen name="SecondScreen" component={SecondScreen} />
                <stack.Screen name="CreateScreen" component={CreateScreen} />
                <stack.Screen name="Home" component={BottomTabNavigation} /> */}
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default ApplicationNavigator;