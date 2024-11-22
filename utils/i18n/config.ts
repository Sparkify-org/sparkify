export type Locale = (typeof locales)[number];

export const locales = ["en", "ar", "tr"] as const; // readonly 
export const defaultLocale: Locale = "en";
