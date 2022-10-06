import ItemCount from '../itemCount/ItemCount'; 
import '../itemDetail/ItemDetailEstilo.css'
import { useState } from "react"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({productos}) => {
    const [count , setCount] = useState(1)
    const {addToCart} = useContext(CartContext);
    function onAdd (productos) {
        addToCart(productos, count);
    }

    return (
        <div className='itemDetail'> 
            <img className="detail-image" src={productos.image} alt={productos.title} />
            <Link to="/">Volver</Link>
            <h2>{productos.title}</h2>
            <div>
                <p>{productos.description}</p>
                <p>{productos.category}</p>
                <p className="precio">Precio ${productos.price} </p>
                <ItemCount count={count} setCount={setCount}/>
            <div>
                <button className='botonCarrito' onClick={() => onAdd(productos) }>Agregar al carrito</button>
                </div> 
            </div>
        </div>
    );
};

export default ItemDetail; 