import React from "react";
import {ThemeContext} from './Contexts'


export default class extends React.Component {
    static contextType = ThemeContext;
    render() {
        return (
            <div>
                current theme {this.context}
            </div>
        )
    }
}