import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import { LanguageContext } from "../../utils/LanguageContext";
import { Image, StyleSheet, View } from "react-native";
import { appStyles } from "../../utils/GlobalStyles";
import { icons } from "../../assets/icons";
import sizeHelper from "../../utils/Helpers";
import { colors } from "../../utils/Themes";
import CustomText from "../Text";
import { fonts } from "../../utils/Themes/fonts";
import { images } from "../../assets/images";

const RecentTransfer = ({ }) => {
    const { theme, isDark }: any = useContext(ThemeContext);
    const { lang, isRTL } = useContext(LanguageContext)
    return (

        <View style={[appStyles.container, appStyles.rowjustify, { backgroundColor: theme.googleButton, borderWidth: 1, borderColor: theme.borderline, width: '100%', alignItems: 'center' }]}>
            {
                isRTL ?
                    <>
                        <View style={{ alignItems: "center", gap: sizeHelper.calHp(8) }}>
                            <Image
                                source={images.liverpool}
                                style={{
                                    width: sizeHelper.calWp(60),
                                    height: sizeHelper.calWp(60)
                                }}
                            />
                            <CustomText
                                size={24}
                                text="ليفربول"
                                color={theme.text}
                                fontFam={fonts.Oswald_Regular}
                                fontWeight={"700"}
                            />
                        </View>
                        <View style={style.redContainer}>
                            <CustomText
                                size={21}
                                fontWeight={"600"}
                                text="$1.1M"
                                color={colors.white}
                                fontFam={fonts.Oswald_Regular}
                            />
                            <View style={style.secondImageContainer}>
                                <Image
                                    source={isRTL ? icons.back_arrow : icons.reverse_back_arrow}
                                    style={{
                                        width: sizeHelper.calWp(20),
                                        height: sizeHelper.calWp(20),
                                        tintColor: theme.background,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={[appStyles.row, { gap: sizeHelper.calWp(20) }]}>

                            <View style={{ gap: sizeHelper.calHp(8), alignItems: "flex-end" }}>
                                <CustomText
                                    size={22}
                                    fontWeight="700"
                                    color={theme.text}
                                    text={"هاري كين"}
                                    fontFam={fonts.Oswald_Bold}
                                />
                                <CustomText
                                    size={18}
                                    fontWeight="600"
                                    color={theme.grey}
                                    text={"لاعب وسط هجومي"}
                                    fontFam={fonts.Oswald_Medium}
                                />
                            </View>
                            <View style={style.border_shadow}>
                                <Image
                                    source={icons.harry_kane}
                                    style={{
                                        width: sizeHelper.calWp(75),
                                        height: sizeHelper.calWp(75),
                                    }}
                                />
                                <View style={style.ImageContainer}>
                                    <Image
                                        source={icons.southampton}
                                        style={{
                                            width: sizeHelper.calWp(22),
                                            height: sizeHelper.calWp(22),
                                        }}
                                    />
                                </View>
                            </View>
                        </View>

                    </>
                    :
                    <>
                        <View style={[appStyles.row, { gap: sizeHelper.calWp(20) }]}>
                            <View style={style.border_shadow}>
                                <Image
                                    source={icons.harry_kane}
                                    style={{
                                        width: sizeHelper.calWp(75),
                                        height: sizeHelper.calWp(75),
                                    }}
                                />
                                <View style={style.ImageContainer}>
                                    <Image
                                        source={icons.southampton}
                                        style={{
                                            width: sizeHelper.calWp(22),
                                            height: sizeHelper.calWp(22),
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ gap: sizeHelper.calHp(8) }}>
                                <CustomText
                                    size={22}
                                    fontWeight="700"
                                    color={theme.text}
                                    text={"Harry Kane"}
                                    fontFam={fonts.Oswald_Bold}
                                />
                                <CustomText
                                    size={18}
                                    fontWeight="600"
                                    color={theme.grey}
                                    text={"Attacking Midfielder"}
                                    fontFam={fonts.Oswald_Medium}
                                />
                            </View>
                        </View>
                        <View style={[style.redContainer, { marginRight: sizeHelper.calWp(30) }]}>
                            <CustomText
                                size={21}
                                fontWeight={"600"}
                                text="$1.1M"
                                color={colors.white}
                                fontFam={fonts.Oswald_Regular}
                            />
                            <View style={style.secondImageContainer}>
                                <Image
                                    source={isRTL ? icons.back_arrow : icons.reverse_back_arrow}
                                    style={{
                                        width: sizeHelper.calWp(20),
                                        height: sizeHelper.calWp(20),
                                        tintColor: theme.background,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ alignItems: "center", gap: sizeHelper.calHp(8) }}>
                            <Image
                                source={images.liverpool}
                                style={{
                                    width: sizeHelper.calWp(60),
                                    height: sizeHelper.calWp(60)
                                }}
                            />
                            <CustomText
                                size={24}
                                text="Liverpool"
                                color={theme.text}
                                fontFam={fonts.Oswald_Regular}
                                fontWeight={"700"}
                            />
                        </View>
                    </>
            }
        </View>
    )
}
export default RecentTransfer;

const style = StyleSheet.create({
    border_shadow: {
        borderWidth: 2,
        borderRadius: 999,
        borderColor: colors.white,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        elevation: 3
    },
    secondImageContainer: {
        borderRadius: 999,
        position: 'absolute',
        bottom: sizeHelper.calHp(12),
        right: sizeHelper.calWp(-18),
        width: sizeHelper.calWp(36),
        height: sizeHelper.calWp(36),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
    },
    ImageContainer: {
        borderRadius: 999,
        position: 'absolute',
        backgroundColor: colors.white,
        padding: sizeHelper.calWp(7),
        bottom: sizeHelper.calHp(-4),
        right: sizeHelper.calWp(1),
    },
    redContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: sizeHelper.calWp(120),
        height: sizeHelper.calHp(60),
        backgroundColor: colors.primary,
        borderRadius: sizeHelper.calWp(26),
    }
})