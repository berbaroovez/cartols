import { Children } from "react";
import Layout from "./layout";
import ProjectHeader from "./Project/ProjectHeader";


export default function ProjectPage({children}){


    return (
            <Layout>    
            <div className="max-w-5xl mx-auto mb-16 relative">
            {children}
            </div>
            </Layout>
    )

}