import React, { useContext, useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import sizeHelper from "../../utils/Helpers";
import { ThemeContext } from "../../utils/ThemeContext";
import { colors } from "../../utils/Themes";

const CustomToggle = () => {
    const [isOn, setIsOn] = useState(false)
    const { theme }: any = useContext(ThemeContext);

    return (
        <TouchableOpacity
            onPress={()=> setIsOn(prev => !prev)}
            style={[
                styles.container,
                { backgroundColor: !isOn ? theme.primary : "#ccc" },
            ]}
            activeOpacity={0.8}
        >
            <View
                style={[
                    styles.circle,
                    {
                        alignSelf: !isOn ? "flex-end" : "flex-start",
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
        height: sizeHelper.calHp(40),
        width: sizeHelper.calWp(90),
        borderRadius: sizeHelper.calWp(36),
    },
    circle: {
        width: sizeHelper.calWp(32),
        height: sizeHelper.calWp(32),
        backgroundColor: colors.white,
        borderRadius: sizeHelper.calWp(100),
    },
});

export default CustomToggle;