import React from "react";
/** Types */
import { ButtonProps } from "./types";
import "./style/button.scss";

export const Button = ({
    textButton,
    onClickedButton,

}: ButtonProps) => {
    return (
        <button
            type="button"
            className={`button`}
            onClick={() => onClickedButton()}
        >
            {textButton}
        </button>
    );
};