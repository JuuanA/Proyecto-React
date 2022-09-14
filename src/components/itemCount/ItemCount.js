import '../itemCount/itemCountEstilo.css'
import { Link } from 'react-router-dom';

const ItemCount = ({setContador , items}) => {
    const handleClick = () => {
        {alert (`Agregaste ${items} items al carrito`)}
    }
    const onAdd = () => {
        setContador(items + 1)
    }
    const onRemove = () => {
        if (items === 0 ){
            return
        }
        setContador(items - 1)
    }
        return (
    <div className="divContador">
        <div>Selecciono {items} items </div>
        <button onClick={onAdd} className="botonSuma">Suma</button>
        <button onClick={onRemove} className="botonResta">Resta</button>        
        <Link to={'/cart'} className="link" onClick={handleClick}> Ir al carrito</Link>
    </div>

    );
};

export default ItemCount;