import React from "react";
/** types */
import {ButtonProps} from "./types";
export const Button = ({
  children,
  onClick,
  disabled,
  type,
  loading,
  className,
}: ButtonProps) => (
  <button
    onClick={onClick}
    type="button"
    className={`button ${
      type === "outlined"
        ? "outlined"
        : type === "default"
        ? "default"
        : type === "primary"
        ? "primary"
        : loading
        ? "loading"
        : ""
    } ${className ? className : ""}`}
    disabled={disabled}
  >
    {loading && (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )}
    <div className="children">{children}</div>
  </button>
);
