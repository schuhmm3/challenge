import React from "react";
/** Libraries */
import { Link } from "react-router-dom";
/** Types */
import { SidebarItemProps } from "./types"

export const SidebarItem = ({  url, text }: SidebarItemProps) => {
    return(
        <Link to = {url}>
            {text}
        </Link>
    )
}