import { useContext, useState, useRef } from "react";
import {
    TouchableOpacity, Text, View, StyleSheet,
    Image, Modal
} from "react-native";
import { LanguageContext } from "../../utils/LanguageContext";
import { ThemeContext } from "../../utils/ThemeContext";
import sizeHelper from "../../utils/Helpers";
import { translate } from "../../utils/Translate";
import { icons } from "../../assets/icons";
import { appStyles } from "../../utils/GlobalStyles";
import { fonts } from "../../utils/Themes/fonts";

const LanguageSwitcher = () => {
    const { theme }: any = useContext(ThemeContext);
    const { lang, changeLang, isRTL } = useContext(LanguageContext);
    const [open, setOpen] = useState(false);
    const [btnLayout, setBtnLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const btnRef = useRef<View>(null);

    const currentLabel = lang === "en"
        ? translate(lang, "EN", "الإنجليزية")
        : translate(lang, "AR", "العربية");

    // Button ki screen position measure karo
    const measureBtn = () => {
        btnRef.current?.measureInWindow((x, y, width, height) => {
            setBtnLayout({ x, y, width, height });
            setOpen(true);
        });
    };

    return (
        <View ref={btnRef} style={{ width: isRTL ? sizeHelper.calWp(160) : sizeHelper.calWp(120) }}>

            {/* ── Button ── */}
            <TouchableOpacity
                style={[styles.button, { width: isRTL ? sizeHelper.calWp(160) : sizeHelper.calWp(120) }]}
                onPress={measureBtn}
            >
                <View style={[appStyles.row, {
                    gap: sizeHelper.calWp(10),
                    flexDirection: isRTL ? "row-reverse" : "row"
                }]}>
                    <Text style={{ color: theme.text, fontFamily: fonts.Oswald_Regular }}>
                        {currentLabel}
                    </Text>
                    <Image
                        source={icons.downArrow}
                        tintColor={theme.text}
                        style={{ width: sizeHelper.calWp(26), height: sizeHelper.calWp(26) }}
                    />
                </View>
            </TouchableOpacity>

            <Modal
                visible={open}
                transparent
                animationType="none"
                onRequestClose={() => setOpen(false)}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={() => setOpen(false)}
                />

                <View style={[styles.dropdown, {
                    backgroundColor: theme.background,
                    borderColor: theme.borderline,
                    top: btnLayout.y + btnLayout.height + 4,
                    left: btnLayout.x,
                    width: btnLayout.width,
                }]}>
                    <TouchableOpacity onPress={() => { changeLang("en"); setOpen(false); }}>
                        <Text style={{ padding: 8, color: theme.text, fontFamily: fonts.Oswald_Regular }}>
                            {translate(lang, "EN", "الإنجليزية")}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { changeLang("ar"); setOpen(false); }}>
                        <Text style={{ padding: 8, color: theme.text, fontFamily: fonts.Oswald_Regular }}>
                            {translate(lang, "AR", "العربية")}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        gap: sizeHelper.calWp(12),
        paddingHorizontal: sizeHelper.calWp(24),
    },
    overlay: {
        // Poori screen cover karo taake bahar tap se band ho
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
    },
    dropdown: {
        position: "absolute",
        borderWidth: 1,
        borderRadius: 6,
        zIndex: 9999,
        elevation: 10,
    },
});

export default LanguageSwitcher;