import Card from "./card";
import Input from "./input";
import "./newproject.css";
import { faFileSignature } from '@fortawesome/free-solid-svg-icons'
import Textarea from "./textarea";
import { MouseEventHandler, useRef } from "react";
import Button from "./button";
import { Project } from "../../types/types";
import { Link } from "react-router-dom";

export default function NewProject({project, setProject}: {project: Project, setProject: React.Dispatch<React.SetStateAction<Project>>}) {



    const input = useRef();
    const textarea = useRef();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        switch (e.target.name) {
            case "title":
                if(input.current)
                {
                    const element = input.current as HTMLInputElement;
                    element.setCustomValidity("");
                }
                break;
            case "description":
                if(textarea.current)
                {
                    const element = textarea.current as HTMLInputElement;
                    element.setCustomValidity("");
                }
                break;
        }
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit: MouseEventHandler = (e) => {
        let inputerror = "";
        let textareaerror = "";

        if (input.current) {
            const element = input.current as HTMLInputElement;
            if ((element?.value?.length ?? 0) == 0) {
                inputerror = "A projekt neve nem lehet üres!";
            }
            else if
                ((element?.value?.length ?? 0) > 255) {
                    inputerror = "A projekt neve max 255 karakter lehet!";
            }
            element.setCustomValidity(inputerror);
        }
        else {
            e.preventDefault();
        }

        if (textarea.current) {

            const element = textarea.current as HTMLTextAreaElement;
            if ((element?.value?.length ?? 0) < 50 && (element?.value?.length ?? 0) != 0) {
                textareaerror = "A projekt leírása minimum 50 karakter legyen vagy üres!";
            }
            else if
                ((element?.value?.length ?? 0) > 500) {
                    textareaerror = "A projekt leírása maximum 500 karakter lehet!";
            }
            element.setCustomValidity(textareaerror);
        } else {
            e.preventDefault();
        }
        
}

return (
    <div className="newproject">
        <h1>Új projekt</h1>
        <div className="editor">
            <div className="preview">
                <Card title={project.title} description={project.description} image="" />
            </div>
            <div className="inputs">
                <Input ref={input} required={true} value={project?.title??''} onChange={handleChange} inputname="Projekt neve" name="title" id="title" type="text" placeholder="Új projekt" icon={faFileSignature} />
                <Textarea ref={textarea} value={project?.description??''} onChange={handleChange} name="description" id="description" inputname="Projekt leírása" />
            </div>
        </div>
        <div className="right">
        <Link to="/"><Button type="button" text="Mégse" /></Link>
            <Button onClick={handleSubmit} type="submit" text="Tovább" />
        </div>
    </div>
)
}