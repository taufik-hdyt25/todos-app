import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {COLORS} from "@src/constants/theme";
import {HomeScreen, LoginScreen} from "@src/screens";
import {RootStackParamList} from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
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
