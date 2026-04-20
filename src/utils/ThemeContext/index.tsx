import React, { createContext, useState, ReactNode } from "react";
import { DarkTheme, LightTheme } from "../Themes/theme";
import { useColorScheme } from "react-native";

// ✅ Context type
type ThemeContextType = {
    theme: any;
    isDark: boolean;
    toggleTheme: () => void;
};

// ✅ Default value (IMPORTANT)
export const ThemeContext = createContext<ThemeContextType>({
    theme: LightTheme,
    isDark: false,
    toggleTheme: () => { },
});

type Props = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    const systemScheme = useColorScheme()
    const [overRide, setOverRide] = useState <boolean | null> (null);

    const isDark = overRide !== null ? overRide : systemScheme === "dark"
    const theme = isDark ? DarkTheme : LightTheme;

    const toggleTheme = () => {
        setOverRide((prev) => {
            const current = prev !== null ? prev : systemScheme === "dark";
            return !current;
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
};