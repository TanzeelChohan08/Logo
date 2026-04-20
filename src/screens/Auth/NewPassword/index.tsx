
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

const NewPassword = ({ navigation }: any) => {
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
            `      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: sizeHelper.calHp(50) }}>

                <View style={{width:"86%"}}>
                    <CustomText
                        size={60}
                        fontWeight={"700"}
                        color={theme.text}
                        fontFam={fonts.Oswald_Bold}
                        textAlign={"center"}
                        text={translate(lang, "Set New Password", "تعيين كلمة مرور جديدة")}
                        style={{ marginTop: sizeHelper.calHp(40) }}
                    />
                    <CustomText
                        size={20}
                        fontWeight={"300"}
                        color={theme.grey}
                        fontFam={fonts.Oswald_Light}
                        text={
                            translate(
                                lang, "Please give a new password.",
                                "يرجى إدخال كلمة مرور جديدة."
                            )}
                        style={{ alignSelf: "center", marginTop: sizeHelper.calHp(10) }}
                    />
                </View>
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
                            backgroundColor={theme.googleButton}
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
                {
                    isRTL
                        ?
                        <CustomInput
                            lablelfontWeight={"400"}
                            labelfontFam={fonts.Oswald_Regular}
                            textAlign={"right"}
                            label={translate(lang, "Retype Password", "أعد كتابة كلمة المرور")}
                            placeholder={translate(lang, "Type here", "اكتب هنا")}
                            labelalignSelf={isRTL ? "flex-end" : "flex-start"}
                            leftSource={icons.inputEye}
                            backgroundColor={theme.googleButton}
                        />
                        :
                        <CustomInput
                            lablelfontWeight={"400"}
                            labelfontFam={fonts.Oswald_Regular}
                            textAlign={"left"}
                            label={translate(lang, "Retype Password", "أعد كتابة كلمة المرور")}
                            placeholder={translate(lang, "Type here", "اكتب هنا")}
                            labelalignSelf={isRTL ? "flex-end" : "flex-start"}
                            borderWidth={1}
                            borderColor={theme.borderline}
                            rightSource={icons.inputEye}
                        />
                }
                <CustomButton
                    width={"98%"}
                    text={translate(lang, "Save and Continue", "احفظ واستمر")}
                    onPress={() => navigation.navigate("WithoutLoginProfileScreen")}
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
export default NewPassword;
const styles = StyleSheet.create({
})