import React from "react";
/** Components */
import { Layout } from "containers/Layout";

/** Styles */
import "./style/about.scss";

export const About = () => {

    return(
        <Layout>
            <div className="about">
                <div className="about__title">
                    <h2>FRONTEND CHALLENGE</h2>
                </div>
                <div className="about__content">
                    This is frontend challenge
                </div>
            </div>
        </Layout>
    )
}