import React, { createContext, useState, ReactNode } from "react";
import { DarkTheme, LightTheme } from "../Themes/theme";

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
    const [isDark, setIsDark] = useState(false);

    const theme = isDark ? DarkTheme : LightTheme;

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
};