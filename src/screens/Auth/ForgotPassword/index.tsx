
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import ScreenLayout from "../../../components/ScreenLayout";
import { colors } from "../../../utils/Themes";
import ThemeToggle from "../../../components/ThemeToggle";
import { LanguageContext } from "../../../utils/LanguageContext";
import { translate } from "../../../utils/Translate";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
import sizeHelper from "../../../utils/Helpers";
import CustomInput from "../../../components/Input";
import CustomButton from "../../../components/Button";
import { appStyles } from "../../../utils/GlobalStyles";
import GoogleIcon from "../../../assets/svgs/google.svg";
import { icons } from "../../../assets/icons";

const ForgotPassword = ({ navigation }: any) => {
  const { theme }: any = useContext(ThemeContext);
  const { lang, isRTL } = useContext(LanguageContext)
  return (
    <ScreenLayout
    >
      <View style={{ flex: 1 }}>

        <CustomText
          size={36}
          text={"Logo"}
          fontWeight={"400"}
          color={theme.text}
          fontFam={fonts.Oswald_Regular}
          style={{ alignSelf: "center", marginTop: sizeHelper.calHp(80) }}
        />
      </View>
      `      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: sizeHelper.calHp(30) }}>
        `        <View style={{ marginBottom: sizeHelper.calHp(30) }}>
          <CustomText
            size={50}
            fontWeight={"700"}
            color={theme.text}
            fontFam={fonts.Oswald_Bold}
            text={translate(lang, "Forgot Password", "نسيت كلمة المرور")}
            style={{ alignSelf: "center", marginTop: sizeHelper.calHp(40) }}
          />
          <CustomText
            size={20}
            fontWeight={"300"}
            color={theme.grey}
            fontFam={fonts.Oswald_Light}
            text={
              translate(
                lang, "No worries i will send you instructions.",
                "لا تقلق سأرسل لك التعليمات."
              )}
            style={{ alignSelf: "center", }}
          />
        </View>
        <CustomInput
          lablelfontWeight={"400"}
          labelfontFam={fonts.Oswald_Regular}
          label={translate(lang, "Enter Email", "أدخل البريد الإلكتروني")}
          placeholder={translate(lang, "Type here", "اكتب هنا")}
          labelalignSelf={isRTL ? "flex-end" : "flex-start"}
          textAlign={"left"}
        />
        <CustomButton
          width={"98%"}
          onPress={() => navigation.navigate("PasswordReset")}
          text={translate(lang, "Reset Password", "إعادة تعيين كلمة المرور")}
        />
      </View>
      <View
                style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginBottom: sizeHelper.calHp(30)

                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("LoginScreen")}
                >
                    <CustomText
                        size={20}
                        fontWeight={"700"}
                        color={theme.text}
                        fontFam={fonts.Oswald_Bold}
                        text={translate(lang, "Back to login", "العودة إلى تسجيل الدخول")}
                    />
                </TouchableOpacity>
            </View>
    </ScreenLayout>
  );
};
export default ForgotPassword;
const styles = StyleSheet.create({
})