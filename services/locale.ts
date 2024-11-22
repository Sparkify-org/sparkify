"use server";

import { cookies, headers } from "next/headers";
import { Locale, locales, defaultLocale } from "@/utils/i18n/config";

const CURR_LOCALE = "USER_LOCALE";

export const getUserLocale = async () => {
  const cachedLocale = cookies().get(CURR_LOCALE)?.value;
  if (cachedLocale) return cachedLocale;

  const acceptLanguage = headers().get("accept-language") || undefined;
  const userDefaultLocale = locales.find((locale) =>
    acceptLanguage?.startsWith(locale),
  );

  return userDefaultLocale || defaultLocale;
};

export const setUserLocale = async (locale: Locale) => {
  cookies().set(CURR_LOCALE, locale);
};
