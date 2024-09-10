import {Text} from "@src/components/Atoms";
import {COLORS} from "@src/constants/theme";
import {StackProps} from "@src/navigation/types";
import React from "react";
import {Image, Pressable, StyleSheet, View} from "react-native";

const LoginScreen = ({navigation}: StackProps<"LoginScreen">) => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          position: "absolute",
        }}
        source={require("../../../assets/shape.png")}
      />

      <View style={styles.container}>
        <Image
          style={{marginBottom: 50}}
          source={require("../../../assets/splash.png")}
        />

        <Text fontWeight="bold" fontsize={18} textStyle={{marginVertical: 20}}>
          Gets things with TODs
        </Text>
        <Text
          fontsize={14}
          textStyle={{
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
          Consequat urna quam felis interdum quisque. Malesuada adipiscing
          tristique ut eget sed.
        </Text>

        <Pressable
          onPress={() => navigation.replace("HomeScreen")}
          style={styles.btnStarted}
        >
          <Text fontWeight="bold" color={COLORS.white}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnStarted: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 50,
    borderRadius: 10,
  },
});
