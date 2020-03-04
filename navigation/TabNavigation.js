import React from "react";
import { Platform, View, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import styles from "../styles";
import { stackStyles } from "./config";
import Friends from "../screen/Tabs/Friends";
import Chatting from "../screen/Tabs/Chatting";
import Profile from "../screen/Tabs/Profile";
import NavIcon from "../components/NavIcon";

const stackFactory = (initialRoute, costomConfig) =>
    createStackNavigator(
        {
            InitialRoute: {
                screen: initialRoute,
                navigationOptions: {
                    ...costomConfig
                }
            }
        }, 
        {
            defaultNavigationOptions: {
                headerBackTitle: null,
                headerTintColor: styles.blackColor,
                headerStyle: { ...stackStyles }
            }
        }
    );

export default createBottomTabNavigator (
    {
        Friends: {
            screen: stackFactory(Friends, {
                title: "Friends"
            }),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <NavIcon 
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-person" : "md-person"} 
                    />
                )
            }
        },
        Chatting: {
            screen: stackFactory(Chatting, {
                title: "Chatting"
            }),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <NavIcon 
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-person" : "md-person"} 
                    />
                )
            }
        }, 
        Profile: {
            screen: stackFactory(Profile, {
                title: "Profile"
            }),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <NavIcon 
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-person" : "md-person"} 
                    />
                )
            } 
        }
    },
    { 
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: "#FAFAFA"
            }
        }
    }
);