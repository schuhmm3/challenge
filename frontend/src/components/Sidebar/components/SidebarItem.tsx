import React from "react";
/** Libraries */
import { Link } from "react-router-dom";

export const SidebarItem = ({icon, url, path, text}) => {
    return(
        <Link to = {url}>
            {text}
        </Link>
    )
}