import { getMouvies } from '../../Services/Api'
import MovieSearch from '../../Components/MovieSearh'
import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'query-string'


function Mouvie() {
    
    const {pathname, search} = useLocation();
    const [mouvies, setMouvies] = useState(null);
    const [searchQuery, setSearchQuery] = useState(qs.parse(search)?.query ||'');
    const [input, setInput] = useState('')
    const history = useHistory();
    useEffect(() => {
        if (searchQuery!=='') {
            getMouvies(searchQuery).then(res => setMouvies(res.results))
            return;
        }
        
    }, [searchQuery]);
    const getQuery=(e)=> {
        e.preventDefault();
        setSearchQuery(input);
        history.push({pathname, search: `?query=${input}`})
        setInput('');
    }
    const onInputChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <>
            <form onSubmit={getQuery}>
                <input type='text' placeholder='search film' onChange={onInputChange}></input>
                <button type='submit'  >Search</button>
            </form>
            {mouvies && <MovieSearch mouvies={mouvies} searchQuery={ searchQuery}/>}
        </>
    )
}

export default Mouvie;