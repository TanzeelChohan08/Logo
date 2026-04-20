import { StyleSheet } from "react-native";
import sizeHelper from "../Helpers";
import { colors } from "../Themes";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
export const appStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowreverse: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  rowjustify: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo_img: {
    width: sizeHelper.calWp(120),
    height: sizeHelper.calWp(120),
    alignSelf: "center",
  },

  back_container: {
    height: sizeHelper.calWp(40),
    width: sizeHelper.calWp(40),
  },
  back_icon: {
    height: sizeHelper.calWp(25),
    width: sizeHelper.calWp(25),
  },
  inner_container: {
    flex: 1,
    gap: sizeHelper.calHp(50),
  },

    circle: {
    width: sizeHelper.calWp(150),
    height: sizeHelper.calWp(150),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizeHelper.calWp(80),
  },

    line: {
    width: "100%",
    height: 1,
  },
});
