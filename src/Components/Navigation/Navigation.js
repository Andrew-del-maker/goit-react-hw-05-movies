import { NavLink } from "react-router-dom";
import './style.css'

const Navigation = () => {
    return (
        <div>
            <nav>
                <NavLink exact to='/' className='navBarLink' activeClassName='activeLink'>Home</NavLink>
                <NavLink to='./mouvies' className='navBarLink' activeClassName='activeLink'>Mouvies</NavLink>
            </nav>
            <hr/>
        </div>
    )
}

export default Navigation;