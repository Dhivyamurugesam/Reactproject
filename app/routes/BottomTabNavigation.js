import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import HandScreen from "../screens/HandScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CalenderScreen from "../screens/CalenderScreen";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
    return(
        
        <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'skyblue',
            tabBarInactiveTintColor:'black',
        }}>
            <Tab.Screen name="home" component={HomeScreen}
            options={{tabBarShowLabel:false,
            tabBarIcon:({color}) =>(
                <Feather name="home" color={color} size={30}/>
            )}}/>
            <Tab.Screen name="Search" component={SearchScreen}
            options={{tabBarShowLabel:false,
                tabBarIcon:({color}) =>(
                    <Feather name="search" color={color} size={30}/>
                )}}/>
            <Tab.Screen name="Hand" component={HandScreen}
            options={{tabBarShowLabel:false,
                tabBarIcon:({color}) =>(
                    <MaterialCommunityIcons name="handshake-outline" color={color} size={30}/>
                )}}/>
            <Tab.Screen name="Create" component={CalenderScreen}
            options={{tabBarShowLabel:false,
                tabBarIcon:({color}) =>(
                    <Feather name="calendar" color={color} size={30}/>
                )}}/>
            <Tab.Screen name="Profile" component={ProfileScreen}
            options={{tabBarShowLabel:false,
                tabBarIcon:({color}) =>(
                    <EvilIcons name="user" color={color} size={40}/>
                )}}/>
        
            </Tab.Navigator>
    );
};

export default BottomTabNavigation;