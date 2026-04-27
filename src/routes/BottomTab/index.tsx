import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform, StyleSheet, View } from "react-native";
import CustomText from "../../components/Text";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../utils/Themes";
import HomeScreen from "../../screens/Main/HomeScreen";
import { icons } from "../../assets/icons";
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import { LanguageContext } from "../../utils/LanguageContext";
const BottomTab = ({ navigation }: any) => {
  const { theme } = useContext(ThemeContext)
  const { lang, isRTL } = useContext(LanguageContext)
  const Bottom = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  const TabItem = ({ focused, title, img }: any) => {
    return (
      <View style={[style.itemStyle]}>
        <Image
          resizeMode="contain"
          source={img}
          style={{
            ...style.img,
          }}
        />
        <CustomText
          text={title}
          fontFam={fonts.Inter_Bold}
          fontWeight="700"
          size={18}
        color={focused ? theme.primary : theme.grey}
        />
      </View>
    );
  };

  return (
    <Bottom.Navigator
    
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: false,
        tabBarShowLabel: false,
        animationEnabled: false,
        gestureEnabled: true,
        cardStyleInterpolator: ({ current, next, layouts }: any) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
        tabBarStyle: {
          backgroundColor: theme.googleButton,
          justifyContent: "center",
          alignItems: "center",
          height: sizeHelper.calHp(110),
          borderTopWidth: -1,
          bottom:
            Platform.OS == "ios"
              ? 0
              : insets.bottom <= 16
                ? insets.bottom - insets.bottom
                : insets.bottom,

          paddingTop: sizeHelper.calHp(Platform.OS == "ios" ? 20 : 30),
        },

        headerShown: false,
      })}
    >
      {/* Home Tab */}
      <Bottom.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
              
                title={isRTL ?"الرئيسية":"Home"}
                img={icons.home}
                focused={focused}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    width: sizeHelper.calWp(130),
    backgroundColor: "transparent", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    gap: sizeHelper.calHp(7),
  },
  img: {
    height: sizeHelper.calHp(33),
    width: sizeHelper.calHp(33),
  },
});
