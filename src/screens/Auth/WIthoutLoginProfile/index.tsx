
import { Image, StyleSheet, Text, View } from "react-native";
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
import { icons } from "../../../assets/icons";
import CustomToggle from "../../../components/CustomToggle";
import ProfileHeader from "../../../components/ProfileHeader";

const WithoutLoginProfileScreen = ({ navigation }: any) => {
    const MatchSetting = ({ title }: any) => {
        return (
            <View style={[appStyles.rowjustify, { width: "100%" }]}>
                {
                    isRTL
                        ?
                        <>
                            <CustomToggle />
                            <CustomText
                                size={22}
                                text={title}
                                fontWeight={"500"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Medium}
                            />
                        </>
                        :
                        <>
                            <CustomText
                                size={22}
                                text={title}
                                fontWeight={"500"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Medium}
                            />
                            <CustomToggle />
                        </>
                }
            </View>
        )
    }
    const { theme }: any = useContext(ThemeContext);
    const { lang, isRTL } = useContext(LanguageContext)
    return (
        <ScreenLayout
        >
            <ProfileHeader
                title={translate(lang, "User Profile", "ملف المستخدم")}
                onPress={() => navigation.goBack()}
            />
            <View style={[appStyles.container, { backgroundColor: theme.googleButton }]}>
                <View style={[appStyles.circle, { borderWidth: 1, borderColor: theme.borderline, backgroundColor: theme.background }]}>
                    <Image
                        source={icons.user}
                        tintColor={theme.dark}
                        style={{
                            width: sizeHelper.calWp(55),
                            height: sizeHelper.calWp(55),
                        }}
                    />
                </View>
                <CustomText
                    size={20}
                    fontWeight={"500"}
                    color={theme.text}
                    fontFam={fonts.Oswald_Medium}
                    text={translate(lang, "Enjoy more features by logging in", "استمتع بمزيد من الميزات عن طريق تسجيل الدخول")}
                />
                <CustomButton
                    width={"98%"}
                    text={translate(lang, "Login", "تسجيل الدخول")}
                    onPress={() => navigation.navigate("BottomTab")}
                />
            </View>
            <View style={[appStyles.rowjustify, appStyles.container, { backgroundColor: theme.googleButton, padding: sizeHelper.calWp(30) }]}>
                {
                    isRTL
                        ?
                        <>
                            <LanguageSwitcher />
                            <CustomText
                                size={20}
                                fontWeight={"500"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Medium}
                                text={translate(lang, "Language", "اللغة")}
                            />
                        </>
                        :
                        <>
                            <CustomText
                                size={20}
                                fontWeight={"500"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Medium}
                                text={translate(lang, "Language", "اللغة")}
                            />
                            <LanguageSwitcher />
                        </>
                }
            </View>
            <View style={[appStyles.rowjustify, appStyles.container, { backgroundColor: theme.googleButton, padding: sizeHelper.calWp(30) }]}>
                {
                    isRTL
                        ?
                        <>
                            <Image
                                source={icons.next_Arrow}
                                tintColor={theme.text}
                                style={{ width: sizeHelper.calWp(36), height: sizeHelper.calWp(26) }}
                            />
                            <CustomText
                                size={20}
                                fontWeight={"500"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Medium}
                                text={translate(lang, "Favourites", "المفضلات")}
                            />
                        </>
                        :
                        <>
                            <CustomText
                                size={20}
                                fontWeight={"500"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Medium}
                                text={translate(lang, "Favourites", "المفضلات")}
                            />
                            <Image
                                source={icons.next_Arrow}
                                tintColor={theme.text}
                                style={{ width: sizeHelper.calWp(36), height: sizeHelper.calWp(26) }}
                            />
                        </>
                }
            </View>
            <View style={[appStyles.rowjustify, appStyles.container, { backgroundColor: theme.googleButton, padding: sizeHelper.calWp(30) }]}>
                {
                    isRTL
                        ?
                        <>
                            <ThemeToggle />
                            <CustomText
                                size={22}
                                fontWeight={"500"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Medium}
                                text={translate(lang, "Theme", "سمة ")}
                            />
                        </>
                        :
                        <>
                            <CustomText
                                size={20}
                                fontWeight={"500"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Medium}
                                text={translate(lang, "Theme", "سمة ")}
                            />
                            <ThemeToggle />
                        </>
                }
            </View>
            <View style={[appStyles.container, { backgroundColor: theme.googleButton }]}>
                <CustomText
                    size={24}
                    fontWeight={"700"}
                    color={theme.text}
                    fontFam={fonts.Oswald_Bold}
                    style={{ alignSelf: isRTL ? "flex-end" : "flex-start" }}
                    text={translate(lang, "Match Setting", "إعدادات المباراة")}
                />
                <MatchSetting title={translate(lang, "Match Start", "بداية المباراة")} />
                <MatchSetting title={translate(lang, "Goals", "الأهداف")} />
                <MatchSetting title={translate(lang, "Match End", "نهاية المباراة")} />
                <MatchSetting title={translate(lang, "Favourite Teams Only", "فرق مفضلة فقط")} />
            </View>
        </ScreenLayout>
    );
};
export default WithoutLoginProfileScreen;
const styles = StyleSheet.create({
})