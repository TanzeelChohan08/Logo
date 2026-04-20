import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import sizeHelper, { screenWidth, screentHeight } from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import CustomText from "../Text";
import { appStyles } from "../../utils/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../../assets/icons";
import { colors } from "../../utils/Themes";
import { ThemeContext } from "../../utils/ThemeContext";
import { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import { translate } from "../../utils/Translate";

const BackButton = ({ onPress, tintColor, backgroundColor, borderColor, isRTL }: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.circle, {
      backgroundColor,
      borderColor
    }]}

  >
    <Image
      source={isRTL ? icons.reverse_back_arrow : icons.back_arrow}
      style={{
        width: sizeHelper.calWp(40),
        height: sizeHelper.calWp(40),
        tintColor: tintColor
      }}
    />
  </TouchableOpacity>
)

const MainHeader = ({ title, onPress }: any) => {

  const { theme }: any = useContext(ThemeContext);
  const { isRTL } = useContext(LanguageContext)
  const navigation = useNavigation();
  return (
    <>
      <View
      style={{marginTop:sizeHelper.calHp(20)}}
      >
        <View style={[appStyles.row, { gap: sizeHelper.calWp(20), alignSelf: isRTL ? "flex-end" : "flex-start" }]}>
          {
            isRTL
              ? (
                <>
                  <CustomText
                    size={30}
                    text={title}
                    fontWeight={"700"}
                    color={theme.text}
                    fontFam={fonts.Oswald_Bold}
                  />
                  <BackButton
                    onPress={onPress}
                    tintColor={theme.text}
                    borderColor={theme.borderline}
                    backgroundColor={theme.googleButton}
                    isRTL
                  />
                </>
              ) : (
                <>
                  <BackButton
                    onPress={onPress}
                    tintColor={theme.text}
                    borderColor={theme.borderline}
                    backgroundColor={theme.googleButton}

                  />
                  <CustomText
                    size={30}
                    text={title}
                    fontWeight={"700"}
                    color={theme.text}
                    fontFam={fonts.Oswald_Bold}
                  />
                </>)
          }

        </View>
      </View>
    </>
  );
};
export default MainHeader;

const styles = StyleSheet.create({
  circle: {
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: sizeHelper.calWp(80),
  },
});
