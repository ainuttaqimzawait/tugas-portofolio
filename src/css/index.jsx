import React from "react";
import Styled from "./styled";
import Bootstrap from "./bootstrap";

export default class Styling extends React.Component {
    render() {
        return (
            <div>
                <Bootstrap />
                <Styled />
            </div>
        )
    }
}