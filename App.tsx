import React from "react";
import { StatusBar } from "react-native";
import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";

export default function App (){
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#01030a" barStyle="dark-content"/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}
