import React from "react";
/** Style */
import "./style/sidebar.scss";
import Logo from "assets/png/logo.png";

export const Sidebar = () => {

    return(
        <div className ="sidebar">
            <div className= "logo">
                <img src={Logo} />
            </div>
        </div>
    )
    
}