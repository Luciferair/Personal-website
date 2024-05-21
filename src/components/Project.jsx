import React from "react";
import Header from "./projects/Header";
import ProjectList from "./projects/ProjectList";

function Project(){
    return(
        <div className=" bg-gradient-to-r from-black to-blue-900 text-white min-h-screen">
            <Header/>
            <ProjectList/>
        </div>
    );
}
export default Project;