import React from "react";
/** style */
import "./style/documentCard.scss";

export const DocumentCard = ({ children }:any) => {
    return(
        <div className="documentCard">
            <div className="documentCard__content">
                {children}
            </div>
        </div>
    )
}