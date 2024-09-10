import {Icon, Text} from "@src/components/Atoms";
import React from "react";
import {View} from "react-native";

const ErrorConnectionScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Icon name="wifi-off" type="MaterialIcons" size={44} />
      <Text fontsize={18} fontWeight="semiBold">
        No Internet Connection
      </Text>
    </View>
  );
};

export default ErrorConnectionScreen;
