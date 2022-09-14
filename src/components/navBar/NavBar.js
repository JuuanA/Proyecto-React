
import Carrito from '../CartWidget/cartWidget';
import { NavLink } from 'react-router-dom';

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
    </ul>
    <Carrito />
    </nav>
} 
