import React, {ReactNode} from "react";
import {View} from "react-native";
import Header from "../Header/Header";

interface ILayoutProps {
  children: ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({children}): JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <Header />
      {children}
    </View>
  );
};

export default Layout;
