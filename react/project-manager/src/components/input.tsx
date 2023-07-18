import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import './input.css'
import { forwardRef } from 'react'

const Input = forwardRef(function Input(props: {inputname: string,type: string, value:number|string, placeholder: string, icon: IconDefinition, name? : string, id?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>)=>void, required?: boolean, disable?: boolean}, ref) {
const {inputname, type, value, placeholder, icon, name, id, onChange, required, disable} = props;
    return (
        <div className='container'>
        <h3>{inputname}</h3>
        <div className="inputbar">
            <FontAwesomeIcon className='fa' icon={icon} />
            <input disabled={disable!=null} ref={ref as any} required={required} onChange={onChange} className='input' type={type} value={value} name={name} id={id} placeholder={placeholder} />
        </div>
        </div>
    )

});

export default Input;