import { getCast } from "../../Services/Api";
import { useEffect, useState } from "react";
// import { useLocation, useHistory } from "react-router";
const shortid = require('shortid');

function Cast({movieId, IMG, searchQuery}) {
    const [cast, setCast] = useState([]);
    // const location = useLocation()
    // const history = useHistory();
    useEffect(() => {
        getCast(movieId).then(res => setCast(res.cast))
       
    }, [movieId]);
    // console.log(cast)
    return (
        <ul>
            {cast.map(castItem => <li key={shortid.generate()}>
                <img src={IMG + castItem.profile_path} alt={castItem.name} width='100' />
                <p>{castItem.name}</p>
                <p>Characer: {castItem.character}</p>          
            </li>)}
        </ul>
    )

}
export default Cast;