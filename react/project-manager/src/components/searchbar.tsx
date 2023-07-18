import './searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Searchbar({search, setSearch}: {search: string, setSearch: (text: string)=>void}) {

    return (
        <div className="searchbar">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} type="text" placeholder="Keresés..." />
        </div>
    )

}