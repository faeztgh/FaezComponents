import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ToggleBtn from "../ToggleBtn";
import "./dark-mode.css";
import { FaRegMoon } from "react-icons/fa";
import { BiSun } from "react-icons/bi";
function DarkMode() {
    const [darkMode, setDarkMode] = useState(getInitialMode());
    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);

    function getInitialMode() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        const userPrefersDark = getPrefColorScheme();
        // if mode was saved --> dark / light
        if (isReturningUser) {
            return savedMode;
            // if preferred color scheme is dark --> dark
        } else if (userPrefersDark) {
            return true;
            // otherwise --> light
        } else {
            return false;
        }
        // return savedMode || false;
    }

    function getPrefColorScheme() {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return (
        <div className="tm-container">
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <nav>
                    <div className="toggle-container">
                        <span className="toggle">
                            <ToggleBtn
                                id="bg-toggle"
                                darkMode={darkMode}
                                onClick={() =>
                                    setDarkMode((prevMode) => !prevMode)
                                }
                                on={<BiSun />}
                                off={<FaRegMoon />}
                            />
                        </span>
                    </div>
                </nav>
                <main className="tm-main">
                    <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
                    <h2>Toggle the switch to see the change</h2>
                    <br/>
                    <h4>Your choice will be saved</h4>
                </main>
            </div>
        </div>
    );
}

export default DarkMode;
