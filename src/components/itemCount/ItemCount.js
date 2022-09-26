import '../itemCount/itemCountEstilo.css'
import { Link } from 'react-router-dom';


const ItemCount = ({count , setCount}) => {
    const onAdd = () => {
        setCount(count + 1)
    }
    const onRemove = () => {
        if (count === 0 ){
            return
        }
        setCount(count - 1)
    }
        return (
    <div className="divContador">
        <div>Selecciono {count} items </div>
        <button onClick={onAdd} className="botonSuma">Suma</button>
        <button onClick={onRemove} className="botonResta">Resta</button>        
        <Link to={'/cart'} className="link" >Ir al carrito</Link>
    </div>

    );
};

export default ItemCount;