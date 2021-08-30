import { getHomeView } from '../../Services/Api'
import { useState, useEffect } from 'react'

import TrendItem from './TrendItem';

export default function Trending() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        getHomeView().then(res => setTrending(res.results))
    }, []);
 
    return (
        <ul>
            {
                trending.map(trend => <TrendItem key={trend.id}trend={trend}/>)
            }
        </ul>
    )
}