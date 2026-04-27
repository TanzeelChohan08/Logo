
import { Image, ScrollView, StyleSheet, View } from "react-native";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { colors } from "../../../utils/Themes";
import { ThemeContext } from "../../../utils/ThemeContext";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../utils/LanguageContext";
import ScreenLayout from "../../../components/ScreenLayout";
import MainHeader from "../../../components/MainHeader";
import { translate } from "../../../utils/Translate";
import { appStyles } from "../../../utils/GlobalStyles";
import sizeHelper from "../../../utils/Helpers";
import { icons } from "../../../assets/icons";
import { images } from "../../../assets/images";
import UpcomingFixture from "../../../components/UpcomingFixture";
import RecentTransfer from "../../../components/RecentTransfer";


const QuickAccess = ({ EngText, ArText }: any) => {
    const { theme }: any = useContext(ThemeContext);
    const { lang, isRTL } = useContext(LanguageContext)
    return (
        <View style={[appStyles.container, appStyles.rowjustify, { width: "50%", borderWidth: 1, borderColor: theme.borderline }]}>
            {
                isRTL
                    ?
                    <>
                        <Image
                            source={icons.arGo_arrow}
                            style={{
                                width: sizeHelper.calWp(38),
                                height: sizeHelper.calWp(38)
                            }}
                        />
                        <CustomText
                            size={24}
                            fontWeight={"600"}
                            color={theme.primary}
                            text={ArText}
                            fontFam={fonts.Oswald_Regular}
                        />
                    </>
                    :
                    <>
                        <CustomText
                            size={24}
                            fontWeight={"600"}
                            color={theme.primary}
                            text={EngText}
                            fontFam={fonts.Oswald_Regular}
                        />
                        <Image
                            source={icons.go_arrow}
                            style={{
                                width: sizeHelper.calWp(38),
                                height: sizeHelper.calWp(38)
                            }}
                        />
                    </>
            }
        </View>
    )
}

const HomeScreen = ({ navigation }: any) => {
    const { theme }: any = useContext(ThemeContext);
    const { lang, isRTL } = useContext(LanguageContext)
    return (
        <ScrollView style={{ backgroundColor: theme.background }}>
            <ScreenLayout style={{ marginBottom: sizeHelper.calHp(20) }}>
                <MainHeader
                    title={translate(lang, "Logo", "شعار")}
                    onProfilePress={() => navigation.navigate("WithLoginProfile")}
                />
                <View style={[appStyles.container, { backgroundColor: theme.googleButton, marginTop: sizeHelper.calHp(20),padding:sizeHelper.calWp(36) }]} >
                    <View style={[appStyles.rowjustify, { width: '100%' }]}>
                        {
                            isRTL
                                ?
                                <>
                                    <CustomText
                                        size={24}
                                        fontWeight={"600"}
                                        color={colors.secondary}
                                        fontFam={fonts.Oswald_Regular}
                                        text={"عرض الكل"}
                                    />
                                    <View style={[appStyles.row, { gap: sizeHelper.calWp(15) }]}>
                                        <CustomText
                                            size={22}
                                            fontWeight={"600"}
                                            color={theme.text}
                                            fontFam={fonts.Oswald_Regular}
                                            text={"المباريات المباشرة"}
                                        />
                                        <Image
                                            source={icons.live}
                                            style={{
                                                width: sizeHelper.calWp(35),
                                                height: sizeHelper.calWp(35)
                                            }}
                                        />

                                    </View>
                                </>
                                :
                                <>
                                    <View style={[appStyles.row, { gap: sizeHelper.calWp(15) }]}>
                                        <Image
                                            source={icons.live}
                                            style={{
                                                width: sizeHelper.calWp(35),
                                                height: sizeHelper.calWp(35)
                                            }}
                                        />
                                        <CustomText
                                            size={22}
                                            fontWeight={"600"}
                                            color={theme.text}
                                            fontFam={fonts.Oswald_Regular}
                                            text={"Live Match"}
                                        />
                                    </View>
                                    <CustomText
                                        size={24}
                                        fontWeight={"600"}
                                        color={colors.secondary}
                                        fontFam={fonts.Oswald_Regular}
                                        text={"View All"}
                                    />
                                </>
                        }
                    </View>
                    <View style={[appStyles.container, { backgroundColor: theme.background, marginTop: sizeHelper.calHp(10),padding:sizeHelper.calWp(36) }]}>
                        <View style={{ alignItems: 'center', gap: sizeHelper.calHp(10) }}>
                            <CustomText
                                size={25}
                                fontWeight={"600"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Regular}
                                text={translate(lang, "CAF Champions League", "دوري أبطال أفريقيا")}
                            />
                            <CustomText
                                size={20}
                                fontWeight={"600"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Regular}
                                text={translate(lang, "17 Jan 2025, 09:30 AM", "17 يناير 2025، 09:30 صباحًا")}
                            />
                        </View>
                        <View style={[appStyles.rowjustify, { width: "100%" }]}>
                            <View style={{ alignItems: "center", gap: sizeHelper.calHp(8) }}>
                                <Image
                                    source={images.liverpool}
                                    style={{
                                        width: sizeHelper.calWp(120),
                                        height: sizeHelper.calWp(120)
                                    }}
                                />
                                <CustomText
                                    size={28}
                                    fontWeight={"600"}
                                    color={theme.text}
                                    fontFam={fonts.Oswald_Regular}
                                    text="Liverpool"
                                />
                            </View>
                            <CustomText
                                size={70}
                                fontWeight={"700"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Bold}
                                text={translate(lang, "2 : 3", "٢ : ٣")}
                            />
                            <View style={{ alignItems: "center", gap: sizeHelper.calHp(8) }}>
                                <Image
                                    source={images.arsenal}
                                    style={{
                                        width: sizeHelper.calWp(120),
                                        height: sizeHelper.calWp(120)
                                    }}
                                />
                                <CustomText
                                    size={28}
                                    fontWeight={"600"}
                                    color={theme.text}
                                    fontFam={fonts.Oswald_Regular}
                                    text={"Arsenal"}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.liveContainer}>
                        <CustomText
                            size={24}
                            fontWeight={"600"}
                            text="Live 90 + 2"
                            color={colors.white}
                            fontFam={fonts.Oswald_Regular}
                        />
                    </View>
                </View>
                <View style={[appStyles.rowjustify, { width: '100%' }]}>
                    {
                        isRTL
                            ?
                            <>
                                <CustomText
                                    size={24}
                                    text={"عرض الكل"}
                                    fontWeight={"600"}
                                    color={colors.secondary}
                                    fontFam={fonts.Oswald_Regular}
                                />
                                <View style={[appStyles.row, { gap: sizeHelper.calWp(15) }]}>
                                    <CustomText
                                        size={22}
                                        fontWeight={"600"}
                                        color={theme.text}
                                        text={"المباريات القادمة"}
                                        fontFam={fonts.Oswald_Regular}
                                    />
                                    <Image
                                        source={icons.live}
                                        style={{
                                            width: sizeHelper.calWp(35),
                                            height: sizeHelper.calWp(35)
                                        }}
                                    />

                                </View>
                            </>
                            :
                            <>
                                <View style={[appStyles.row, { gap: sizeHelper.calWp(15) }]}>
                                    <Image
                                        source={icons.live}
                                        style={{
                                            width: sizeHelper.calWp(35),
                                            height: sizeHelper.calWp(35)
                                        }}
                                    />
                                    <CustomText
                                        size={22}
                                        fontWeight={"600"}
                                        color={theme.text}
                                        fontFam={fonts.Oswald_Regular}
                                        text={"Upcoming Fixtures"}
                                    />
                                </View>
                                <CustomText
                                    size={24}
                                    fontWeight={"600"}
                                    color={colors.secondary}
                                    fontFam={fonts.Oswald_Regular}
                                    text={"View All"}
                                />
                            </>
                    }
                </View>
                <UpcomingFixture isShowGold={true} />
                <UpcomingFixture />
                <UpcomingFixture />
                <UpcomingFixture />
                <UpcomingFixture />
                <View style={[appStyles.container, { alignItems: 'baseline', backgroundColor: theme.googleButton }]}>
                    <CustomText
                        size={24}
                        fontWeight={"700"}
                        color={theme.text}
                        fontFam={fonts.Oswald_Bold}
                        text={translate(lang, "Quick Access", "المباريات القادمة")}
                    />
                    <View style={[appStyles.row, { gap: sizeHelper.calWp(20), alignSelf: 'center' }]}>
                        <QuickAccess EngText={"Live Matches"} ArText={"المباريات المباشرة"} />
                        <QuickAccess EngText={"Fixtures"} ArText={"المباريات القادمة"} />
                    </View>
                    <View style={[appStyles.row, { gap: sizeHelper.calWp(20), alignSelf: 'center' }]}>
                        <QuickAccess EngText={"Standings"} ArText={"الترتيب"} />
                        <QuickAccess EngText={"News"} ArText={"الأخبار"} />
                    </View>
                </View>
                <View style={[appStyles.rowjustify, { width: '100%' }]}>
                    {
                        isRTL
                            ?
                            <>
                                <CustomText
                                    size={24}
                                    text={"عرض الكل"}
                                    fontWeight={"600"}
                                    color={colors.secondary}
                                    fontFam={fonts.Oswald_Regular}
                                />
                                <View style={[appStyles.row, { gap: sizeHelper.calWp(15) }]}>
                                    <CustomText
                                        size={22}
                                        fontWeight={"600"}
                                        color={theme.text}
                                        text={"التحويلات الأخيرة"}
                                        fontFam={fonts.Oswald_Regular}
                                    />
                                    <Image
                                        source={icons.transfer}
                                        style={{
                                            width: sizeHelper.calWp(75),
                                            height: sizeHelper.calWp(35)
                                        }}
                                    />

                                </View>
                            </>
                            :
                            <>
                                <View style={[appStyles.row, { gap: sizeHelper.calWp(15) }]}>
                                    <Image
                                        source={icons.transfer}
                                        style={{
                                            width: sizeHelper.calWp(75),
                                            height: sizeHelper.calWp(35)
                                        }}
                                    />
                                    <CustomText
                                        size={22}
                                        fontWeight={"600"}
                                        color={theme.text}
                                        fontFam={fonts.Oswald_Regular}
                                        text={"Recent Transfer"}
                                    />
                                </View>
                                <CustomText
                                    size={24}
                                    fontWeight={"600"}
                                    color={colors.secondary}
                                    fontFam={fonts.Oswald_Regular}
                                    text={"View All"}
                                />
                            </>
                    }
                </View>
                <RecentTransfer/>
                <RecentTransfer/>
                <RecentTransfer/>
                <RecentTransfer/>
            </ScreenLayout>
        </ScrollView>
    );
};
export default HomeScreen;
const styles = StyleSheet.create({
    liveContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: sizeHelper.calWp(190),
        height: sizeHelper.calHp(50),
        backgroundColor: colors.primary,
        borderRadius: sizeHelper.calWp(999),
    }
})