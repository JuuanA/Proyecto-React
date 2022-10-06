import { useContext , useState } from "react"
import { CartContext } from "../../context/CartContext";
import "./CartEstilos.css"
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore, updateDoc,doc,}  from 'firebase/firestore';
import moment from "moment";

const Cart = () => {
    const navigate = useNavigate();
    const {cart ,addToCart, removeItem , clear} = useContext(CartContext);

    console.log(cart)

    const totalCarro = () => {
        return  cart.reduce ((acc, items ) => acc + (items.price * items.quantity)  , 0 ) }
    
        const [order, setOrder] = useState({ 
            buyer: {
                name: 'juan' ,
                phone: '123456789',
                email: 'testeo@gmail.com'
        },
        items: [],
        total: 0,
        date: '',
        }); 
        const db = getFirestore();
        const crearOrden = () => {
            setOrder((currentOrder) => {
                return {
                ...currentOrder, 
                items:cart , total: cart.reduce((acc, item ) => acc + item.price * item.quantity, 0 ), 
                date: moment().format('DD/MM/YYYY, h:mm:ss a'), 
                
        };
        
    });
        const query = collection(db, 'orders');
        addDoc(query, order)
        .then(({id}) => {
        console.log(id);
        actualizarStockProductos();
        alert('Gracias por tu compra nos contactaremos lo antes posible'); } )
        .catch(() => alert('Tu compra no pudo ser completada, intente en unos minutos'))
    };

    const actualizarStockProductos = () => {
        cart.forEach(product => {
            const queryUpdate = doc(db, 'items', product.id);
            updateDoc(queryUpdate, {
                categoryId: product.categoryId,
                description: product.description,
                image: product.image,
                price: product.price,
                title: product.title,
                stock: product.stock - product.quantity,
            })
                .then(() => {
                    if (cart[cart.length - 1].id === product.id) {
                    clear();
                    navigate('/');
                }
            })
                .catch(() => {
                    console.log('No se pudo actualizar el stock !');
                });
            });
        };

    return (
    <div className="carrito">
        {cart.length === 0 ? (

        <div className="tituloVacio">
        <h2>El carrito esta vacio</h2>
        <Link to={'/'} className="volver">Volver a la Tienda</Link>
        </div> 

        ) : (
            <>
            <h1 className="titutloCarrito">Tu carrito de Compras</h1>

        {cart.map((items) => ( 
            <div key={items.id} className="divCarro">
                    <img className="imagenCart" src={items.image} alt={items.title} />
                    <h3>{items.title}</h3>
                    <p>${items.price}</p>
                    <p>Cantidad: {items.quantity}</p>
                    <p>Total ${items.price * items.quantity}</p>
                    <button onClick={() => removeItem(items.id)}>Eliminar</button>
            </div> ))}
            <h2>Total : ${parseInt(totalCarro())}</h2>
            <button onClick={crearOrden}>Terminar Compra</button>
            </>
        )}
    </div>);
};

export default Cart;