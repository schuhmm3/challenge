import React from "react";
/**Libraries */
import classnames from "classnames";
/**Styles */
import "./spinner.scss";

export const Spinner = ({ message, size }) => {
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
