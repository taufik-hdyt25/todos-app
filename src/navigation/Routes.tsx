import {NavigationContainer} from "@react-navigation/native";

import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import StackNavigator from "./StackNavigator";

const MainApp: React.FC = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainApp;
