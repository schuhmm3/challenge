import React from "react";
/** Components */
import { SidebarItem } from "./components/SidebarItem";
/** Constants */
import { TEXT_TITLE_SIDEBAR } from "constants/texts";
/** Style */
import "./style/sidebar.scss";

export const Sidebar = () => {
    return(
        <div className ="sidebar">
            <div className="sidebar__title">
                { TEXT_TITLE_SIDEBAR }
            </div>
            <SidebarItem url="rest" text="test"/>
        </div>
    )
    
}