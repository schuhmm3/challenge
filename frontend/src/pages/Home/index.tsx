import React from "react";
/** Containers */
import { Layout } from "containers/Layout";
/** Components */
import { Searchbar } from "components/Searchbar";

export const Home = () => {
    return (
        <Layout>
                <Searchbar 
                    value="text" 
                    placeholder="Search..." 
                    onChange={() => ({})}
                    iconName={"search"}
                />
        </Layout>
    )
}