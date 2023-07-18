import { useContext, useState } from "react";
import "./Wizard.css"
import NewProject from "./components/newproject";
import { Project, ProjectContext } from "../types/types";
import Colleagues from "./components/colleagues";
import { Navigate } from "react-router-dom";
import { DataContext } from "./App";

export default function Wizard() {

    const {setData} = useContext<ProjectContext>(DataContext);
    const [step, setStep] = useState(0);
    const [project, setProject] = useState<Project>({title: undefined, description: '', image: undefined, colleagues: [{name:'Benedek', position:'Fejlesztő', idx: '0'},{name:'József', position:'UI/UX Designer', idx: '2'}], links: [{name:'Figma', url:'figma.com', idx: '0'},{name:'JIRA', url:'jira.com', idx: '2'}]})
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if(step == 2)
        {
            setData((d)=>[project, ...d]);
        }
        setStep((x)=>x+1);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
        <main className="wizard">
            <div className="wizard-progress">
                <div className="wizard-progress-bar" style={{width: (step/3.0)*100+'%'}}></div>
            </div>
            <div className="wizard-workspace">
                {step === 0 && <NewProject project={project} setProject={setProject} />}
                {step === 1 && <Colleagues project={project} setProject={setProject} override={false} />}
                {step === 2 && <Colleagues project={project} setProject={setProject} override={true} />}
                {step >= 3 && <Navigate to="/" />}
            </div>
        </main>
        </form>

    )
}