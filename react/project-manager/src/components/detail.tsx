import { Project } from '../../types/types';
import Colleagues from './colleagues';
import './detail.css';
export default function Detail({data}: {data: Project}) {

    console.log(data);

    return (
        <div className='wrapper'>
        <div className="detail">
            <div className="detail-img">
                {!data?.image?.includes('undefined') ? <img src={data.image} alt={data.title} /> : <div className='imgloading'>Loading...</div>}
            </div>
            <div className="detail-content">
                {data?.title!=undefined ? <h3>{data.title}</h3> : <div className='loading'>Loading...</div>}
                {data?.description!=undefined ? <p>{data?.description}</p>: <p className='loading'>Loading...</p>}
            </div>
        </div>
        <Colleagues project={data} setProject={()=>{}} override={false} disable={true} />
        <Colleagues project={data} setProject={()=>{}} override={true} disable={true} />
        </div>
    )

}