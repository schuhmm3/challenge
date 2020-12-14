import  { ReactNode } from "react";
export type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "primary" | "default" | "outlined";
    loading?: boolean;
    className?: string;
  };