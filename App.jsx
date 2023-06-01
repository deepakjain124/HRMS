import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";

import {Alert} from "react-native";
import MainStack from "./src/navigations/Stack/MainStack";


const App = () => {

    return (
        <NavigationContainer>
            <SafeAreaProvider style={{backgroundColor: "#fff"}}>
                <MainStack/>
            </SafeAreaProvider>
        </NavigationContainer>
    );
};

export default App;