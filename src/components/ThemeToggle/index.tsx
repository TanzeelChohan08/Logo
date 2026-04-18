import React, { useContext } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import sizeHelper from "../../utils/Helpers";
import { ThemeContext } from "../../utils/ThemeContext";
import { colors } from "../../utils/Themes";

const ThemeToggle = () => {
    // ✅ correct destructuring
    const { isDark, toggleTheme, theme } = useContext(ThemeContext);

    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: isDark ? theme.primary : "#ccc" },
            ]}
            activeOpacity={0.8}
            onPress={toggleTheme}
        >
            <View
                style={[
                    styles.circle,
                    {
                        alignSelf: isDark ? "flex-end" : "flex-start",
                    },
                ]}
            />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: sizeHelper.calWp(8),
        height: sizeHelper.calHp(50),
        width: sizeHelper.calWp(105),
        borderRadius: sizeHelper.calWp(36),
    },
    circle: {
        width: sizeHelper.calWp(42),
        height: sizeHelper.calWp(42),
        backgroundColor: colors.white,
        borderRadius: sizeHelper.calWp(100),
    },
});

export default ThemeToggle;