import { useState } from "react";
import { CartContext } from './CartContext';


export const CartProvider = ({ children }) => {
    const [cart , setCart] = useState([]);

    const addToCart = ( item, quantity) => 
        { setCart([...cart, { ...item, quantity}])
        console.log('cart', [...cart,{...item, quantity}]);

        if (estaEnCarrito(item.id)) {
            alert('Este Producto Ya esta en el carrito');
        } else {
            setCart([...cart, { ...item, quantity}])
        }
        console.log('cart', [...cart,{...item, quantity}]);
    }; 
        const estaEnCarrito = (id) => {
        return cart.some((item) => item.id === id); 
    };

    const removeItem = (productoId) => {
        let nuevoArray = [];
        cart.forEach((product) =>{
        if (product.id === productoId) {
            console.log(product)
        }else {
            nuevoArray.push(product)
        }
        });
        setCart(nuevoArray);
    };
    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};