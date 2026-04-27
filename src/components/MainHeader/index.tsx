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

const BackButton = ({ onPress, tintColor, backgroundColor, borderColor, source, width, height }: any) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.circle, {
            backgroundColor,
            borderColor
        }]}

    >
        <Image
            source={source}
            style={{
                width: width || sizeHelper.calWp(40),
                height: height || sizeHelper.calWp(40),
                tintColor: tintColor
            }}
        />
    </TouchableOpacity>
)

const MainHeader = ({ title, onPress, onProfilePress, showBackButton = false }: any) => {

    const { theme, isDark }: any = useContext(ThemeContext);
    const { isRTL } = useContext(LanguageContext)
    const navigation = useNavigation();
    return (
        <>
            <View
                style={{ marginTop: sizeHelper.calHp(20) }}
            >
                <View style={[appStyles.rowjustify, { alignItems: 'center', width: '100%' }]}>
                    {
                        isRTL
                            ? (
                                <>
                                    <View style={[appStyles.row, { gap: sizeHelper.calWp(20) }]}>
                                        <TouchableOpacity onPress={onProfilePress}>
                                            <Image
                                                source={icons.mini_profile}
                                                style={{
                                                    width: sizeHelper.calWp(70),
                                                    height: sizeHelper.calWp(70)
                                                }}
                                            />
                                        </TouchableOpacity>
                                        <BackButton
                                            onPress={onPress}
                                            borderColor={theme.circleLine}
                                            source={isDark ? icons.dark_notification : icons.light_notifications}
                                            width={sizeHelper.calWp(35)}
                                            height={sizeHelper.calWp(35)}
                                        />
                                        <View style={[styles.circle, { borderColor: theme.circleLine }]}>
                                            <CustomText
                                                size={20}
                                                text={"العربية"}
                                                fontWeight={"700"}
                                                color={theme.text}
                                                fontFam={fonts.Oswald_Bold}
                                            />
                                        </View>
                                    </View>
                                    <View style={[appStyles.row, { gap: sizeHelper.calWp(20), }]}>
                                        <CustomText
                                            size={40}
                                            text={title}
                                            fontWeight={"700"}
                                            color={theme.text}
                                            fontFam={fonts.Oswald_Bold}
                                        />
                                        {
                                            showBackButton && (
                                                <BackButton
                                                    onPress={onPress}
                                                    tintColor={theme.text}
                                                    borderColor={theme.borderline}
                                                    source={icons.reverse_back_arrow}
                                                    backgroundColor={theme.googleButton}
                                                />
                                            )
                                        }
                                    </View>

                                </>
                            ) : (
                                <>
                                    <View style={[appStyles.row, { gap: sizeHelper.calWp(20), }]}>
                                        {
                                            showBackButton && (
                                                <BackButton
                                                    onPress={onPress}
                                                    tintColor={theme.text}
                                                    source={icons.back_arrow}
                                                    borderColor={theme.borderline}
                                                    backgroundColor={theme.googleButton}
                                                />
                                            )
                                        }
                                        <CustomText
                                            size={40}
                                            text={title}
                                            fontWeight={"700"}
                                            color={theme.text}
                                            fontFam={fonts.Oswald_Bold}
                                        />
                                    </View>
                                    <View style={[appStyles.row, { gap: sizeHelper.calWp(20) }]}>
                                        <View style={[styles.circle, { borderColor: theme.circleLine }]}>
                                            <CustomText
                                                size={20}
                                                text={"EN"}
                                                fontWeight={"700"}
                                                color={theme.text}
                                                fontFam={fonts.Oswald_Bold}
                                            />
                                        </View>
                                        <BackButton
                                            onPress={onPress}
                                            borderColor={theme.circleLine}
                                            source={isDark ? icons.dark_notification : icons.light_notifications}
                                            width={sizeHelper.calWp(35)}
                                            height={sizeHelper.calWp(35)}
                                        />
                                        <TouchableOpacity onPress={onProfilePress}>
                                            <Image
                                                source={icons.mini_profile}
                                                style={{
                                                    width: sizeHelper.calWp(70),
                                                    height: sizeHelper.calWp(70)
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
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
        width: sizeHelper.calWp(70),
        height: sizeHelper.calWp(70),
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: sizeHelper.calWp(999),
    },
});
