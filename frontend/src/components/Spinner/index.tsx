import React from "react";
/**Libraries */
import classnames from "classnames";
/** types */
import { SpinnerProps } from "./types";
/**Styles */
import "./style/spinner.scss";

export const Spinner = ({ message, size } : SpinnerProps) => {
    const spinnerClass = classnames("spinner_three-bounce", {
        [`spinner_three-bounce--${size}`]: size,
    });
    return (
        <div className="spinner">
            <div className={spinnerClass}>
                {[...Array(3)].map((_, idx) => (
                    <div key={idx} />
                ))}
            </div>
            {message && <div className="spinner_message">{message}</div>}
        </div>
    );
};
