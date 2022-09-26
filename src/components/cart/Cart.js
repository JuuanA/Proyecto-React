import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import "./CartEstilos.css"
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart ,addToCart, removeItem} = useContext(CartContext);

    return (
    <div className="carrito">
        {cart.length === 0 ? (
            
        <div className="tituloVacio">
        <h2>El carrito esta vacio</h2>
        <Link to={'/'} className="aaa">Volver a la Tienda</Link>
        </div>

        ) : (
            <>
            <h1 className="titutloCarrito">Tu carrito de Compras</h1>

        {cart.map((items) => ( 
            <div key={items.id} className="divCarro">
                    <img className="imagenCart" src={items.image} alt={items.title} />
                    <h3>{items.title}</h3>
                    <p>${items.price}</p>
                    <p>Cantidad {items.quantity}</p>
                    <button onClick={() => removeItem(items.id)}>Eliminar</button>
            </div> ))};
            <button>Terminar Compra </button>
            </>
        )}
    </div>);
};

export default Cart;