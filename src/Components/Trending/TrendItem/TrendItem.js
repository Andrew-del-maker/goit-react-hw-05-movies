import { Link, useLocation } from 'react-router-dom'

export default function TrendeingItem({ trend }) {
    const location = useLocation();
    return (
        <li>
            <Link to={{
                pathname: `/mouvies/${trend.id}`,
                state: {backUrl: location.state}
            }}>{trend.name || trend.title}</Link>
        </li>
    )
}