import { useEffect, useState } from "react";
import { useParams, NavLink, useRouteMatch, Route, Switch, useLocation, useHistory} from "react-router-dom"
import { getMouviePage } from "../../Services/Api";
import Cast from '../Cast/Cast'
import Review from "../Review";
import './style.css'

const IMG_PATH='https://image.tmdb.org/t/p/w500'
export default function MouviePage() {
    const [mouvie, setMouvie] = useState(null);
    const {movieId} = useParams();
    const { url } = useRouteMatch();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        getMouviePage(movieId).then(res => setMouvie(res))
    }, [movieId]);
    // console.log(url)
    const onGoBack = () => {
        // if (location && location.state && location.state.from) {
            
        //     history.push(location.state.from);
        // }
        history.push(location?.state?.from??'/')
    };

    return (
        mouvie && <div>
        <button type='button' onClick={onGoBack}>go back </button>
        <hr/>
        <div className='filmInfo'>
            <img src={IMG_PATH + mouvie.poster_path} alt='' className='poster' />
            <div className='filmDescription'>
                <h3>{mouvie.original_title} ({mouvie.release_date})</h3>
                <p>User score {mouvie.popularity}%</p>
                <h4>Overview</h4>
                <p>{mouvie.overview}</p>
                <h4>Genres</h4>
                <ul>
                    {mouvie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                </ul>
            </div>
        </div>
        <hr/>
        <div>
            <h4>Additional information</h4>
            <ul>
                <li>
                    <NavLink to={`/mouvies/${movieId}/cast`}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/reviews`}>Review</NavLink>
                </li>
                
            </ul>
        </div>
        <hr/>
        <Switch>
            <Route path={`/mouvies/${movieId}/cast`}>
                <Cast movieId={movieId} IMG={IMG_PATH} />
            </Route>
            <Route path={`/mouvies/${movieId}/reviews`}>
                <Review movieId={movieId} />
            </Route>    
        </Switch>
        
    </div>
    )

}