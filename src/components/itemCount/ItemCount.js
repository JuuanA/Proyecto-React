import { useState } from "react"

const ItemCount = (props) => {
    const [items , setItems] = useState(0)

    const suma = () =>  items  < props.stock  ? setItems(items + 1) : alert('No hay mas en Stock') 
    const resta = () =>  items  > 0 ? setItems(items - 1) : alert("No se pueden ingresar valores por debajo de 0")
        return (
    <div className="divContador">
        <div>Selecciono {items} items </div>
        <div>Stock {props.stock}</div>
        <button onClick={suma}>Suma</button>
        <button onClick={resta}>Resta</button>
        <button onClick={()=>{alert (`Agregaste ${items} items al carrito`)}}>Agregar al carrito</button>

    </div>
        );
};

export default ItemCount;