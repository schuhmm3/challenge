import React from "react";
/** Types */
import { ButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style/button.scss";

export const Button = ({
    textButton,
    color,
    onClickedButton,
    css,
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={`go-button go-button__${color} ${css ? css : ""}`}
            onClick={() => onClickedButton()}
            disabled={disabled}
        >
            {textButton}
        </button>
    );
};