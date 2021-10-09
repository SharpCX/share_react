import Wrapper from "./Wrapper";
import React, {useState} from "react";
import {ThemeContext} from './Contexts'


export default function () {
    const [theme, setTheme] = useState('dark')

    function changeContext() {
        setTheme(theme+"1")
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div onClick={changeContext}>Data Context
                <Wrapper/>
            </div>
        </ThemeContext.Provider>
    )
}