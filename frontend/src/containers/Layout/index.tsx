import React from "react";
/** Components */
import { Sidebar } from "containers/Sidebar";
/** Types */
import { LayoutType } from "./types";
/** Style */
import "./style/layout.scss";

export const Layout = ({ children }: LayoutType) => {
    return (
        <main className="layout">
            <div className ="layout__content">
                <Sidebar />
                <div className ="layout__main-content">
                    {children}
                </div>
            </div>
        </main>
    )
}