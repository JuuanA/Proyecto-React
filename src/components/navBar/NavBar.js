
import Carrito from '../CartWidget/cartWidget';

export default function NavBar(){
    return <nav className="navbar"> 
    <a href="" className="titulo">Tienda Virtual</a>
    <ul> <a href="" className="primeraOpcion">Primera</a></ul>
    <ul> <a href="" className="segundaOpcion">Segunda</a></ul>
    <ul> <a href="" className="terceraOpcion">Tercera</a></ul>
    <Carrito />
    </nav>
} 
