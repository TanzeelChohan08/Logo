
import { StyleSheet, Text, View } from "react-native";
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

const LoginScreen = ({ navigation }: any) => {
  const { theme }: any = useContext(ThemeContext);
  const { lang, isRTL } = useContext(LanguageContext)
  return (
    <ScreenLayout
    >
      <CustomText
        size={36}
        text={"Logo"}
        fontWeight={"400"}
        color={theme.text}
        fontFam={fonts.Oswald_Regular}
        style={{ alignSelf: "center", marginTop: sizeHelper.calHp(80) }}
      />
      <View>
        <CustomText
          size={50}
          fontWeight={"700"}
          color={theme.text}
          fontFam={fonts.Oswald_Bold}
          text={translate(lang, "Welcome Back", "مرحبًا بعودتك")}
          style={{ alignSelf: "center", marginTop: sizeHelper.calHp(40) }}
        />
        <CustomText
          size={20}
          fontWeight={"300"}
          color={theme.grey}
          fontFam={fonts.Oswald_Light}
          text={
            translate(
              lang, "Enter email and password or continue with authentication.",
              "أدخل البريد الإلكتروني وكلمة المرور أو تابع مع المصادقة."
            )}
          style={{ alignSelf: "center", marginTop: sizeHelper.calHp(10) }}
        />
      </View>
      <CustomInput
        lablelfontWeight={"400"}
        labelfontFam={fonts.Oswald_Regular}
        label={translate(lang, "Email", "البريد الإلكتروني")}
        placeholder={translate(lang, "Type here", "اكتب هنا")}
        labelalignSelf={isRTL ? "flex-end" : "flex-start"}
        textAlign={"left"}
      />
      {
        isRTL
          ?
          <CustomInput
            lablelfontWeight={"400"}
            labelfontFam={fonts.Oswald_Regular}
            textAlign={"right"}
            label={translate(lang, "Password", "كلمة المرور")}
            placeholder={translate(lang, "Type here", "اكتب هنا")}
            labelalignSelf={isRTL ? "flex-end" : "flex-start"}
            leftSource={icons.inputEye}
          />
          :
          <CustomInput
            lablelfontWeight={"400"}
            labelfontFam={fonts.Oswald_Regular}
            textAlign={"left"}
            label={translate(lang, "Password", "كلمة المرور")}
            placeholder={translate(lang, "Type here", "اكتب هنا")}
            labelalignSelf={isRTL ? "flex-end" : "flex-start"}
            borderWidth={1}
            borderColor={theme.borderline}
            rightSource={icons.inputEye}
          />
      }
      <CustomButton
        width={"98%"}
        onPress={() => navigation.navigate("CreateAccount")}
        text={translate(lang, "Login", "تسجيل الدخول")}
      />
      <CustomText
        size={26}
        fontWeight={"700"}
        color={theme.text}
        fontFam={fonts.Oswald_Bold}
        text={translate(lang, "Forgot Password?", "نسيت كلمة المرور؟")}
        style={{ alignSelf: "center", marginTop: sizeHelper.calHp(10) }}
      />
      <View style={[appStyles.row, { gap: sizeHelper.calWp(5), justifyContent: 'center' }]}>
        <View style={[appStyles.line, { width: "30%", backgroundColor: theme.borderline }]} />
        <CustomText
          size={20}
          fontWeight={"700"}
          color={theme.text}
          fontFam={fonts.Oswald_Bold}
          style={{ alignSelf: "center" }}
          text={translate(lang, " OR ", " أو ")}
        />
        <View style={[appStyles.line, { width: "30%", backgroundColor: theme.borderline }]} />
      </View>
      <CustomButton
        width={"100%"}
        textColor={theme.text}
        bgColor={theme.googleButton}
        text={translate(lang, "Continue with Google", "تابع باستخدام جوجل")}
      >
        <GoogleIcon
          width={sizeHelper.calWp(50)}
          height={sizeHelper.calWp(50)}
        />
      </CustomButton>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: sizeHelper.calHp(30)

        }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: "row"
          }}
        >
          <CustomText
            size={20}
            fontWeight={"700"}
            color={theme.grey}
            fontFam={fonts.Oswald_Bold}
            text={translate(lang, "Don’t have an account?", "ليس لديك حساب؟")}
          />
          <CustomText
            size={23}
            fontWeight={"700"}
            color={theme.primary}
            fontFam={fonts.Oswald_Bold}
            text={translate(lang, "  Create an Account", "إنشاء حساب  ")}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
})