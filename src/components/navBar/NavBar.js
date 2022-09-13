
import Carrito from '../CartWidget/cartWidget';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return <nav className="navbar"> 
   <NavLink className={"titulo"} to={'/'}>
            Fake Store
        </NavLink>
    <ul> 
        <NavLink to={'/'}>
            Inicio
        </NavLink>
    </ul>
    <Carrito />
    </nav>
} 
