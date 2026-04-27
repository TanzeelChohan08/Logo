
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
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
import { images } from "../../../assets/images";

const WithLoginProfile = ({ navigation }: any) => {
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
        <ScrollView style={{backgroundColor:theme.background}}>
            <ScreenLayout style={{ marginBottom: sizeHelper.calHp(20) }}>
                <View style={[appStyles.rowjustify, { alignItems: 'center' }]}>
                    {
                        isRTL ?
                            <>
                                <CustomButton
                                    size={20}
                                    height={sizeHelper.calHp(120)}
                                    width={"38%"}
                                    bgColor={theme.buttonBlue}
                                    text={translate(lang, "Subscribe to primium", "اشترك في البريميوم")}
                                    style={{ marginTop: sizeHelper.calHp(20) }}
                                />
                                <ProfileHeader
                                    title={translate(lang, "User Profile", "ملف المستخدم")}
                                    onPress={() => navigation.goBack()}
                                />
                            </>
                            :
                            <>
                                <ProfileHeader
                                    title={translate(lang, "User Profile", "ملف المستخدم")}
                                    onPress={() => navigation.goBack()}
                                />
                                <CustomButton
                                    size={18}
                                    height={sizeHelper.calHp(120)}
                                    width={"38%"}
                                    bgColor={theme.buttonBlue}
                                    text="Subscribe to primium"
                                    style={{ marginTop: sizeHelper.calHp(20) }}
                                />
                            </>
                    }
                </View>
                <View style={[appStyles.container, { backgroundColor: theme.googleButton }]}>
                    <Image
                        source={images.profile}
                        style={{
                            width: sizeHelper.calWp(180),
                            height: sizeHelper.calWp(180),
                        }}
                    />
                    <CustomInput
                        textAlign={isRTL ? "right" : "left"}
                        borderColor={theme.borderline}
                        lablelfontWeight={"400"}
                        labelfontFam={fonts.Oswald_Regular}
                        backgroundColor={theme.background}
                        label={translate(lang, "Name", "الاسم")}
                        placeholder={"Jhon Doe"}
                        labelalignSelf={isRTL ? "flex-end" : "flex-start"}
                    />
                    <View style={[appStyles.rowjustify, { width: "100%" }]}>
                        <CustomInput
                            textAlign={isRTL ? "right" : "left"}
                            borderColor={theme.borderline}
                            lablelfontWeight={"400"}
                            labelfontFam={fonts.Oswald_Regular}
                            backgroundColor={theme.background}
                            label={translate(lang, "Email", "البريد الإلكتروني")}
                            placeholder={"examples@gmail.com "}
                            width={"47%"}
                            fontSize={19}
                            labelalignSelf={isRTL ? "flex-end" : "flex-start"}
                        />
                        <CustomInput
                            textAlign={isRTL ? "right" : "left"}
                            borderColor={theme.borderline}
                            lablelfontWeight={"400"}
                            labelfontFam={fonts.Oswald_Regular}
                            backgroundColor={theme.background}
                            label={translate(lang, "Phone", "الهاتف")}
                            width={"47%"}
                            placeholder={"+10 123456789"}
                            labelalignSelf={isRTL ? "flex-end" : "flex-start"}
                        />

                    </View>
                    <CustomButton
                        width={"98%"}
                        borderWidth={1}
                        bgColor={"transparent"}
                        textColor={theme.primary}
                        borderColor={theme.primary}
                        text={translate(lang, "Save Changes", "حفظ التغييرات")}
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
                <View style={[appStyles.rowjustify, { marginTop: sizeHelper.calHp(100), }]}>
                    {
                        isRTL
                            ?
                            <>

                                <CustomButton
                                    width={"48%"}
                                    borderWidth={1}
                                    text={"تسجيل الخروج"}
                                    bgColor={"transparent"}
                                    textColor={theme.primary}
                                    borderColor={theme.primary}
                                />
                                <CustomButton
                                    width={"48%"}
                                    borderWidth={1}
                                    text={"حذف الحساب"}
                                    bgColor={"transparent"}
                                    textColor={theme.buttongrey}
                                    borderColor={theme.buttongrey}
                                />
                            </>
                            :
                            <>
                                <CustomButton
                                    width={"48%"}
                                    borderWidth={1}
                                    text={"Delete Account"}
                                    bgColor={"transparent"}
                                    textColor={theme.buttongrey}
                                    borderColor={theme.buttongrey}
                                />
                                <CustomButton
                                    width={"48%"}
                                    borderWidth={1}
                                    text={"Logout"}
                                    bgColor={"transparent"}
                                    textColor={theme.primary}
                                    borderColor={theme.primary}
                                />
                            </>
                    }
                </View>
            </ScreenLayout>
        </ScrollView>
    );
};
export default WithLoginProfile;
const styles = StyleSheet.create({
    
})