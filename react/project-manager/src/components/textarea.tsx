import { forwardRef } from 'react';
import './textarea.css'

const Textarea = forwardRef(function Textarea(props: {inputname: string,name? : string, id?: string, value:string, onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>)=>void}, ref) {
const {inputname, name, id, value, onChange} = props;
    return (
        <div className='container2'>
        <h3>{inputname}</h3>

            <textarea ref={ref as any} className='input' name={name} id={id} onChange={onChange} cols={30} rows={10} value={value}></textarea>

        </div>
    )

});

export default Textarea;