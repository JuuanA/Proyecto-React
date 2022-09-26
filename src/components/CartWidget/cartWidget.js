import logo from './cartimg.svg';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';


export default function carrito(){
    return (
        <div>
        <img src={logo} className="carrito"></img>
        <Link to="/Cart">Carrito</Link>
        </div>
    )
} 
