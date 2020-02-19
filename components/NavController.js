import React from "react";
import { useIsLoggedIn } from "../AuthContext";

export default () => {
    const isLoggedIn = useIsLoggedIn();
    return;
}