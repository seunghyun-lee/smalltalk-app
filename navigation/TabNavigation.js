import react from "React";
import { Platform, View, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

const stackFactory = (initialRoute, costomConfig) =>
    createStackNavigator(
        {
            InitialRoute: {
                screen: initialRoute,
                navigationOptions: {
                    ...costomConfig
                }
            }
        }
    );

export default createBottomTabNavigator (

);