import {Icon, Text} from "@src/components/Atoms";
import {COLORS} from "@src/constants/theme";
import React from "react";
import {Image, Pressable, View} from "react-native";

const Header: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        justifyContent: "space-between",
        paddingVertical: 10,
        columnGap: 10,
      }}
    >
      <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={require("../../../../assets/todo-logo.png")}
        />
        <Text fontWeight="semiBoldItalic" fontsize={24} color={COLORS.white}>
          Todo List
        </Text>
      </View>
    </View>
  );
};

export default Header;
