import {NativeStackScreenProps} from "@react-navigation/native-stack";

// Define the types for your stack's parameters
export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
};

export type StackProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
