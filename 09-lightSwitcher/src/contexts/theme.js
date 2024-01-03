import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  thememode: 'light', //default var
  darktheme: () => {},
  lighttheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
