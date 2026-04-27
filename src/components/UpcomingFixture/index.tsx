import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import { LanguageContext } from "../../utils/LanguageContext";
import { appStyles } from "../../utils/GlobalStyles";
import { icons } from "../../assets/icons";
import sizeHelper from "../../utils/Helpers";
import CustomText from "../Text";
import { Image, View } from "react-native";
import { fonts } from "../../utils/Themes/fonts";

const UpcomingFixture = ({ isShowGold = false }: any) => {
    const { theme }: any = useContext(ThemeContext);
    const { lang, isRTL } = useContext(LanguageContext)
    return (

        <View style={[appStyles.container, appStyles.rowjustify, { backgroundColor: theme.googleButton, borderWidth: 1, borderColor: theme.borderline, }]}>
            {
                isRTL
                    ?
                    <>
                        <Image
                            source={isShowGold ? icons.gold_star : icons.star}
                            style={{
                                width: sizeHelper.calWp(38),
                                height: sizeHelper.calWp(38)
                            }}
                        />
                        <View style={{ width: sizeHelper.calWp(350), gap: sizeHelper.calHp(16), alignItems: "flex-end", }}>
                            <View style={[appStyles.row, { gap: sizeHelper.calWp(10) }]}>
                                <Image
                                    source={icons.star}
                                    style={{
                                        width: sizeHelper.calWp(28),
                                        height: sizeHelper.calWp(28)
                                    }}
                                />
                                <CustomText
                                    size={20}
                                    fontWeight={"600"}
                                    color={theme.text}
                                    fontFam={fonts.Oswald_Regular}
                                    text={"ساوثهامبتون"}
                                />

                                <Image
                                    source={icons.southampton}
                                    style={{
                                        width: sizeHelper.calWp(35),
                                        height: sizeHelper.calWp(35)
                                    }}
                                />
                            </View>
                            <View style={[appStyles.row, { gap: sizeHelper.calWp(10) }]}>

                                <Image
                                    source={icons.star}
                                    style={{
                                        width: sizeHelper.calWp(28),
                                        height: sizeHelper.calWp(28)
                                    }}
                                />
                                <CustomText
                                    size={20}
                                    fontWeight={"600"}
                                    color={theme.text}
                                    fontFam={fonts.Oswald_Regular}
                                    text={"برايتون هوف ألبيون"}
                                />

                                <Image
                                    source={icons.brighton}
                                    style={{
                                        width: sizeHelper.calWp(35),
                                        height: sizeHelper.calWp(35)
                                    }}
                                />

                            </View>
                        </View>
                        <View style={{ gap: sizeHelper.calHp(8) }}>
                            <CustomText
                                size={25}
                                fontWeight={"600"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Regular}
                                text={"17 يناير 2025"}
                            />
                            <CustomText
                                size={20}
                                fontWeight={"600"}
                                color={theme.grey}
                                fontFam={fonts.Oswald_Regular}
                                text={"09:30 صباحًا"}
                                textAlign={"right"}
                            />
                        </View>

                    </>
                    :
                    <>
                        <View style={{ gap: sizeHelper.calHp(8) }}>
                            <CustomText
                                size={25}
                                fontWeight={"600"}
                                color={theme.text}
                                fontFam={fonts.Oswald_Regular}
                                text={"17 Jan 2025"}
                            />
                            <CustomText
                                size={20}
                                fontWeight={"600"}
                                color={theme.grey}
                                fontFam={fonts.Oswald_Regular}
                                text={"09:30 AM"}
                            />
                        </View>
                        <View style={{ width: sizeHelper.calWp(350), gap: sizeHelper.calHp(20) }}>
                            <View style={[appStyles.row, { gap: sizeHelper.calWp(10) }]}>

                                <Image
                                    source={icons.southampton}
                                    style={{
                                        width: sizeHelper.calWp(35),
                                        height: sizeHelper.calWp(35)
                                    }}
                                />
                                <CustomText
                                    size={20}
                                    fontWeight={"600"}
                                    color={theme.text}
                                    fontFam={fonts.Oswald_Regular}
                                    text={"Southampton"}
                                />
                                <Image
                                    source={icons.star}
                                    style={{
                                        width: sizeHelper.calWp(28),
                                        height: sizeHelper.calWp(28)
                                    }}
                                />

                            </View>
                            <View style={[appStyles.row, { gap: sizeHelper.calWp(10) }]}>

                                <Image
                                    source={icons.brighton}
                                    style={{
                                        width: sizeHelper.calWp(35),
                                        height: sizeHelper.calWp(35)
                                    }}
                                />

                                <CustomText
                                    size={20}
                                    fontWeight={"600"}
                                    color={theme.text}
                                    fontFam={fonts.Oswald_Regular}
                                    text={"Brighton & Hove Al..."}
                                />
                                <Image
                                    source={icons.star}
                                    style={{
                                        width: sizeHelper.calWp(28),
                                        height: sizeHelper.calWp(28)
                                    }}
                                />
                            </View>
                        </View>
                        <Image
                            source={isShowGold ? icons.gold_star : icons.star}
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

export default UpcomingFixture;