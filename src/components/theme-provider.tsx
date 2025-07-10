"use server"

import {ThemeProvider as NextThemesProvider, type ThemeProviderProps} from "next-themes"

export async function ThemeProvider({children, ...props}: ThemeProviderProps) {
  return (
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
  )
}
