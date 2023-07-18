import React from "react";

export interface Project {
    title: string|undefined;
    description: string|undefined;
    image: string|undefined;
    colleagues?: {name:string, position: string, idx: string}[];
    links?: {name:string, url: string, idx: string}[];
}

export interface ProjectContext {data: Project[]; setData: React.Dispatch<React.SetStateAction<Project[]>>}