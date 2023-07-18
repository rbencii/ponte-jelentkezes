import Input from "./input";
import "./colleagues.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faDiceD20, faPlusCircle, faDatabase, faLink } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
import Button from "./button";
import { Project } from "../../types/types";
import React from "react";

export default function Colleagues({ project, setProject, override, disable }: { project: Project, setProject: React.Dispatch<React.SetStateAction<Project>>, override: boolean, disable?: boolean }) {

    const idxref = useRef((!override ? project?.colleagues?.length : project?.links?.length) ?? 0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (disable) return;
        setProject((p: any) => {
            const newcolleagues = !override ? [...p?.colleagues ?? []] : [...p?.links ?? []];
            if (newcolleagues.length > 0) {
                const colleague = (newcolleagues as any).find((colleague: { idx: string }) => colleague?.idx == e?.target?.id && colleague?.idx !== undefined);
                if (colleague) {
                    console.log(colleague, e.target.name, e.target.value)
                    const field = colleague[e?.target?.name as keyof typeof colleague];
                    if (field != undefined) {
                        console.log('field')
                        colleague[e.target.name as keyof typeof colleague] = e?.target?.value as any;
                        return !override ? { ...p, colleagues: newcolleagues } : { ...p, links: newcolleagues };
                    }
                }
            }
            return p;

        })
    }


    return (
        <div className="colleagues">
            <h1>{!override ? 'Projekten dolgozó személyek' : 'Projekthez kapcsolódó linkek'}</h1>
            {
                !override
                    ?
                    <div className="list">
                        {
                            project?.colleagues?.map((colleague, index) =>
                                <React.Fragment key={index}>
                                    <Input disable={disable} onChange={handleChange} required={true} value={colleague?.name ?? ''} inputname="Név" name='name' id={colleague.idx.toString()} type="text" placeholder="József" icon={faPerson} />
                                    <Input disable={disable} onChange={handleChange} required={true} value={colleague?.position ?? ''} inputname="Pozíció" name='position' id={colleague.idx.toString()} type="text" placeholder="UI/UX Designer" icon={faDiceD20} />
                                </React.Fragment>
                            )
                        }

                    </div>
                    :
                    <div className="list">
                        {
                            project?.links?.map((link, index) =>
                                <React.Fragment key={index}>
                                    <Input disable={disable} onChange={handleChange} required={true} value={link?.name ?? ''} inputname="Adattípus" name='name' id={link.idx.toString()} type="text" placeholder="Videó" icon={faDatabase} />
                                    <Input disable={disable} onChange={handleChange} required={true} value={link?.url ?? ''} inputname="Link" name='url' id={link.idx.toString()} type="text" placeholder="https://www.youtube.com" icon={faLink} />
                                </React.Fragment>
                            )
                        }

                    </div>}
            {!disable &&
                <>
                    {
                        !override ?
                            <div className="right">
                                <FontAwesomeIcon onClick={() => setProject((p) => { idxref.current++; return { ...p, colleagues: [...p?.colleagues ?? [], { name: '', position: '', idx: (idxref.current).toString() }] } })} className="fabsolute" icon={faPlusCircle} />
                            </div>
                            :
                            <div className="right">
                                <FontAwesomeIcon onClick={() => setProject((p) => { idxref.current++; return { ...p, links: [...p?.links ?? [], { name: '', url: '', idx: (idxref.current).toString() }] } })} className="fabsolute" icon={faPlusCircle} />
                            </div>}
                </>
            }

            {!disable &&
                <div className="center">
                    <Button type="submit" text="Tovább" />
                </div>}
        </div>
    )
}