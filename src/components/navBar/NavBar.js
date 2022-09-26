
import Carrito from '../CartWidget/cartWidget';
import { Link , NavLink } from 'react-router-dom';

export default function NavBar(){
    return <nav className="navbar"> 
    <NavLink className={"titulo"} to={'/'}>
            Fake Store
        </NavLink>
    <ul > 
        <li>
        <NavLink to={'/'}>
            Inicio
        </NavLink>
        </li>
        <li>
            <NavLink to={'category/electronics'}>
                Electronica 
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/jewelery'}>
                Joyas    
            </NavLink>
        </li>
        <li>
        <Link to="/Cart">Carrito</Link>
        </li>
    </ul>
    <Carrito />
    </nav>
} 
