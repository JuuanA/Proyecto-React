import ItemCount from '../itemCount/ItemCount.js'; 
import '../itemDetail/ItemDetailEstilo.css'
import { useState } from "react"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';
import { Link } from 'react-router-dom';

export const ItemDetail = ({productos}) => {
    const handleClick = () => {
        {alert (`Agregaste ${items} items al carrito`)}
    }

    const [items , setContador] = useState(1)
    const {addAlCarrito} = useContext(CartContext);
    function onAdd(productos, cantidad) 
    {addAlCarrito(productos, cantidad);}

    return (
        <div className='itemDetail'> 
            <img className="detail-image" src={productos.image} alt={productos.title} />
            <Link to="/">Volver</Link>
            <h2>{productos.title}</h2>
            <div>
                <p>{productos.description}</p>
                <p>{productos.category}</p>
                <p className="precio">Precio ${productos.price} </p>
                <ItemCount setContador={setContador} items={items}
            />
            <div>
                <button className='botonCarrito' onClick={() => onAdd(productos)}>Agregar al carrito</button>
                </div> 
            </div>
        </div>
    );
};

export default ItemDetail; 