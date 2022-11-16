import {createContext} from "react";

export interface ThemeContextProps {
    theme: string,
    toggleTheme: () => void
}

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {}
});