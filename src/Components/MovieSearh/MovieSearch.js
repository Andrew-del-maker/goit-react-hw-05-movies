import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
const shortid = require('shortid');

function MovieSearch({ mouvies,searchQuery }) {
    const location = useLocation();
    return (
        <ul>
                {mouvies.map(mouvie => <li key={shortid.generate()}><Link to={{
                pathname: `/mouvies/${mouvie.id}`,
                    state: { backUrl: location.pathname, search: `query=${searchQuery}`}
            }}>{mouvie.title}</Link></li>)}
            </ul>
    )
}
export default MovieSearch;