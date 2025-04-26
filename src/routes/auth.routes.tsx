import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import SignIn from "../pages/signin";
import SignUp from "../pages/signup";

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown:false,}}
            />

            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerStyle:{
                        backgroundColor:"#e48f4f"
                    }
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes