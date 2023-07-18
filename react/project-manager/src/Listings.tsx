import Button from "./components/button";
import Card from "./components/card";
import Searchbar from "./components/searchbar";
import "./Listings.css";
import { ProjectContext} from "../types/types.ts";
import {  useContext, useEffect, useMemo, useRef, useState } from "react";
import { DataContext } from "./App";
import { Link } from "react-router-dom";

export default function Listings() {

    const {data} = useContext<ProjectContext>(DataContext);
    const [search, setSearch] = useState<string>("");
    const [filteredData, setFilteredData] = useState(data);
    const [loading, setLoading] = useState(false);
    const debounce = useRef<number|null>(null);
    const dummy = useMemo(()=>{return Array(9).fill({ title: undefined, description: undefined, image: undefined })}, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const loadSimulation = (text: string) => {
        setLoading(true);
        setTimeout(() => {
            setFilteredData(data.filter((item) => {
                return item.title?.toLowerCase().includes(text.toLowerCase());
            }));
            setLoading(false);
        }, 700);
    }

    const handleChange = (text: string) => {
        setSearch(text);
        setLoading(false);
        if(debounce.current!=null) clearTimeout(debounce.current);
        debounce.current = setTimeout(() => {
            loadSimulation(text);
        }, 500);
    }


    
    return (
        <main>
            <div className="controls">
                <Searchbar search={search} setSearch={handleChange} />
                <Link to={"/new"}><Button /></Link>
            </div>
            <div className="cards">
                {loading
                ?
                <>
                {dummy.map((item, index) => {
                    return <Link to={'/'} key={index}><Card image={item.image} title={item.title} description={item.description} /></Link>
                })}
                </>
                :
                <>
                {filteredData.map((item, index) => {
                    return <Link to={'/projekt/'+encodeURIComponent(item?.title??'')} key={index}><Card image={item.image} title={item.title} description={item.description} /></Link>
                })}
                </>
                }
            </div>
        </main>
    )
}