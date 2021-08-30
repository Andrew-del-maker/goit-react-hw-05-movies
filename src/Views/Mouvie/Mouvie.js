import { getMouvies } from '../../Services/Api'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const shortid = require('shortid');


function Mouvie() {
    const [mouvies, setMouvies] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [input, setInput] = useState('')
    const location = useLocation();
    
    useEffect(() => {
        if (searchQuery!=='') {
            getMouvies(searchQuery).then(res => setMouvies(res.results))
            return;
        }
        
    }, [searchQuery]);
    const getQuery=(e)=> {
        e.preventDefault();
        setSearchQuery(input);
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
            {mouvies&& <ul>
                {mouvies.map(mouvie => <li key={shortid.generate()}><Link to={{
                pathname: `/mouvies/${mouvie.id}`,
                state: {from: location}
            }}>{mouvie.title}</Link></li>)}
            </ul>}
        </>
    )
}

export default Mouvie;