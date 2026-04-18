export const translate = (lang: "en" | "ar", en: string, ar: string) => {
    return lang === "en"? en : ar
}