
import Carrito from '../CartWidget/cartWidget';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return <nav className="navbar"> 
    <a href="" className="titulo">Fake Store</a>
    <ul> 
        <NavLink to={'/'}>
            Inicio
        </NavLink>
    </ul>
    <Carrito />
    </nav>
} 
