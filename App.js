import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Text, View, AsyncStorage } from "react-native";
import { ApolloProvider } from "react-apollo-hooks";
import { ThemeProvider } from "styled-components";
import { AuthProvider} from "./AuthContext";
import client from "./apolloClient";
import styles from "./styles";
import NavController from "./components/NavController";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/logo.png")]);
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (isLoggedIn === null || isLoggedIn === "false") {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preLoad();
  }, []);
  return loaded && client && isLoggedIn !== null ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={styles}>
        <AuthProvider isLoggedIn={isLoggedIn}>          
          <NavController />          
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  ) : (
    <AppLoading />
  );
};