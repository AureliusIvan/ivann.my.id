"use server"

import {ThemeProvider as NextThemesProvider} from "next-themes"
import {type ThemeProviderProps} from "next-themes/dist/types"

export async function ThemeProvider({children, ...props}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>
    {children}
  </NextThemesProvider>
}
