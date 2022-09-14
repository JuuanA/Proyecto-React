import ItemCount from '../itemCount/ItemCount.js'; 
import '../itemDetail/ItemDetailEstilo.css'

import { useState } from "react"

export const ItemDetail = ({productos}) => {
    const [items , setContador] = useState(0)
    const handleClick = () => {
        {alert (`Agregaste ${items} items al carrito`)}
    }

    return (
        <div className='itemDetail'> 
            <img className="detail-image" src={productos.image} alt={productos.title} />
            <h2>{productos.title}</h2>
            <div>
                <p>{productos.description}</p>
                <p>{productos.category}</p>
                <p className="precio">Precio ${productos.price} </p>
                <ItemCount setContador={setContador} items={items}/>
            </div>
        </div>
    );
};

export default ItemDetail;