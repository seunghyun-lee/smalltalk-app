import React from "react";
import { useIsLoggedIn } from "../AuthContext";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
    const isLoggedIn = useIsLoggedIn();
    return <MainNavigation />;
}