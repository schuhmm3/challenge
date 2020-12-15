import React from "react";
/** Containers */
import { Layout } from "containers/Layout";
/** Components */
import { Searchbar } from "components/Searchbar";
import { BasicTable } from "components/BasicTable";
import tableConstants from "components/BasicTable/tableConstants";
/** Mock Data */
import { data } from "constants/mockData";

export const Home = () => {
    const handleEdit = (item:any) => () => {
        // write your logic
        console.log(JSON.stringify(item))
      }
    return (
        <Layout>
            <div className="homePage">
                <div className="homePage__searchbar">
                    <Searchbar 
                        value="text" 
                        placeholder="Search..." 
                        onChange={() => ({})}
                        iconName={"search"}
                    />
                </div>
                <div className = "homePage__table">
                    <BasicTable cols={tableConstants(handleEdit)} data={data} striped />
                </div>
            </div>
        </Layout>
    )
}