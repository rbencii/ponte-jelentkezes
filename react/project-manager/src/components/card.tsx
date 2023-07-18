import { Project } from '../../types/types';
import './card.css';
export default function Card(data: Project) {

    return (
        <div className="card">
            <div className="card-img">
                {data?.image ? <img src={data.image} alt={data.title} /> : <div className='imgloading'>Loading...</div>}
            </div>
            <div className="card-content">
                {data?.title!=undefined ? <h3>{data.title}</h3> : <div className='loading'>Loading...</div>}
                {data?.description!=undefined ? <p>{data?.description?.substring(0,200)}{(data?.description?.length??0)>=200?'...':''}</p>: <p className='loading'>Loading...</p>}
            </div>
        </div>
    )

}