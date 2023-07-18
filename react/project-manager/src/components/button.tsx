import { MouseEventHandler } from 'react';
import './button.css';

export default function Button({type, text, onClick}: {type?: "button"|"submit"|"reset", text?:string, onClick?: MouseEventHandler}) {
    

    return (
        <div className="button">
            <button type={type??'button'} onClick={onClick}>{text ? text : 'Új projekt'}</button>
        </div>
    )
}