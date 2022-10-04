
import Carrito from '../CartWidget/cartWidget';
import { Link , NavLink } from 'react-router-dom';
import logo from '../CartWidget/cartimg.svg'

export default function NavBar(){
    return <nav className="navbar"> 
    <NavLink className={"titulo"} to={'/'}>
            Tienda virtual
        </NavLink>
    <ul > 
        <li>
        <NavLink to={'/'}>
            Todos los productos
        </NavLink>
        </li>
        <li>
            <NavLink to={'category/men clothes'}>
                Ropa de hombre 
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/joyas'}>
                Joyas    
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/electronicos'}>
                Electronicos    
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/ropa de mujer'}>
                Ropa de dama    
            </NavLink>
        </li>
        <li>
        <Link to="/Cart"> 
        <img src={logo} className="carrito"></img>
        </Link>
        </li>
    </ul>
    </nav>
} 
