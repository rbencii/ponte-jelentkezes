import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "./App";
import "./Details.css"
import Detail from "./components/detail";
import Button from "./components/button";

export default function Details() {

    const {id} = useParams<{id: string}>();
    const {data} = useContext(DataContext);
    if(id==undefined) return (<>404</>)
    const project = data?.find((item)=>item.title==decodeURIComponent(id));


    return (    
        <main className="details">
            <Detail data={{title: project?.title, description: project?.description, colleagues: project?.colleagues, links: project?.links, image: '../'+project?.image}} />
            <Link to={'/'}><Button text="Vissza" /></Link>
        </main>
    )
};