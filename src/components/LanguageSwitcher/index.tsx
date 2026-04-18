import { useContext, useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { LanguageContext } from "../../utils/LanguageContext";
import { ThemeContext } from "../../utils/ThemeContext";
import sizeHelper from "../../utils/Helpers";

const LanguageSwitcher = () => {
    const { theme }: any = useContext(ThemeContext);
    const { lang, changeLang } = useContext(LanguageContext);
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.wrapper}>
            {/* Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => setOpen(!open)}
            >
                <Text style={{ color: theme.text }}>{lang.toUpperCase()}</Text>
                <Text style={{ color: theme.text }}>▼</Text>
            </TouchableOpacity>

            {/* Dropdown */}
            {open && (
                <View style={[styles.dropdown, { backgroundColor: theme.background }]}>
                    <TouchableOpacity onPress={() => { changeLang("en"); setOpen(false); }}>
                        <Text style={{ padding: 8, color: theme.text }}>EN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { changeLang("ar"); setOpen(false); }}>
                        <Text style={{ padding: 8, color: theme.text }}>AR</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        position: "relative",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: sizeHelper.calWp(24),
        paddingVertical: sizeHelper.calHp(12),
        borderWidth: 1,
        borderRadius: 6,
        gap: sizeHelper.calWp(12),
        width: sizeHelper.calWp(120),
    },
    dropdown: {
        position: "absolute",
        top: sizeHelper.calHp(70),
        width: sizeHelper.calWp(120),
        backgroundColor: "#222",
        borderRadius: 6,
        padding: sizeHelper.calWp(10),
    },
});
export default LanguageSwitcher;