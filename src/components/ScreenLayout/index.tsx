import React, { useContext } from "react";
import {
  StyleSheet,
  ViewStyle,
  View,
  StatusBar,
  StatusBarStyle,
  Platform,
} from "react-native";
import sizeHelper from "../../utils/Helpers";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../Text";
import { fonts } from "../../utils/Themes/fonts";
import { colors } from "../../utils/Themes";
import { ThemeContext } from "../../utils/ThemeContext";

interface ScreenLayoutProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  barStyle?: StatusBarStyle; // "light-content" | "dark-content" | "default"
  translucent?: boolean;
  paddingTop?: any;
  backgroundSource?: any;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  style,
  backgroundColor,
  barStyle,
  translucent,
  paddingTop,
  backgroundSource,
}) => {
  const insets = useSafeAreaInsets();
  const {theme} =useContext(ThemeContext)
  const bg = backgroundColor || theme.background;

  return (
    <>
      <StatusBar
        backgroundColor={bg}
        translucent={!!translucent}
        barStyle={barStyle || theme.statusTheme}
      />

      <View style={{ height: insets.top, backgroundColor: bg }} />

      <View
        style={[
          styles.background,
          {
            backgroundColor:theme.background,
            paddingTop: sizeHelper.calHp(paddingTop || Platform.OS=="ios"? 35:0),
          },
          style
        ]}
      >
        <View style={[styles.container, style ,{backgroundColor:theme.background}]}>{children}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    // justifyContent: "center",
    gap: sizeHelper.calHp(35),
    paddingHorizontal: sizeHelper.calWp(35),
  },
});

export default ScreenLayout;
