import { createContext, ReactNode, useState } from "react";
import { I18nManager } from "react-native";

type Lang = "en" | "ar";

type ContextType = {
    lang: Lang;
    isRTL: boolean;
    changeLang: (lang: Lang) => void; // 👈 add this
};

export const LanguageContext = createContext<ContextType>({
    lang: "en",
    isRTL: false,
    changeLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>("en");

    // ✅ yahan add hoga
    const changeLang = (newLang: Lang) => {
        setLang(newLang);

        // I18nManager.forceRTL(newLang === "ar");
    };

    return (
        <LanguageContext.Provider
            value={{
                lang,
                changeLang, // 👈 yahan pass karo
                isRTL: lang === "ar"
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};