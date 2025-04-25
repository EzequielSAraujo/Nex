import React from "react";
import { View } from "react-native";

import AuthRoutes from "./auth.routes";

function Routes(){
    const loading = false;
    const singned = false;
    return(
        singned ? <View></View> :  <AuthRoutes/>
    )
}

export default Routes;