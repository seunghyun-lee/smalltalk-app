import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import { stackStyles } from "./config";

const MainNavigation = createStackNavigator(
    {
        TabNavigation
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                ...stackStyles
            }
        },
        headerMode: "none",
        mode: "modal"
    }
);

export default createAppContainer(MainNavigation);