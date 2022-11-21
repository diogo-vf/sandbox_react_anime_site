import { useState } from 'react';
import { ThemeContext, ThemeContextProps } from "./Common/themeContext";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom"
import styles from "./App.module.css";
import CreateSeriesView from "./views/create.series.view";

function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const themeContext: ThemeContextProps = { theme, toggleTheme }

    return (
        <ThemeProvider theme={createTheme({
            palette: {
                mode: theme
            },
        })}>
            <BrowserRouter>
                <ThemeContext.Provider value={themeContext}>
                    <div className={`${styles.App} ${styles[`background-${theme}`]}`}>

                        <CreateSeriesView />
                        <button onClick={toggleTheme} style={{ position: "fixed", left: 0, bottom: 0, zIndex: 99 }}>
                            Toggle Theme
                        </button>
                    </div>
                </ThemeContext.Provider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
