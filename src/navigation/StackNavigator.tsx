import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {useNetInfo} from "@react-native-community/netinfo";
import {COLORS} from "@src/constants/theme";
import {ErrorConnectedScreen, HomeScreen, LoginScreen} from "@src/screens";
import {RootStackParamList} from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const {isConnected} = useNetInfo();

  if (isConnected === null || !isConnected) {
    return <ErrorConnectedScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        statusBarColor: COLORS.primary,
        statusBarAnimation: "fade",
        contentStyle: {
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
