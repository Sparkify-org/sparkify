import { ThemeProvider as NextThemeProvider } from "next-themes";
import React, { ComponentProps } from "react";

export const ThemeProvider: React.FC<
  ComponentProps<typeof NextThemeProvider>
> = ({ children, ...props }) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};
