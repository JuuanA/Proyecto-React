import { useState } from "react";
import { CartContext } from "./CartContext";



export const CartProvider = ({children}) => {
    const [carrito , setCarrito] = useState([]);

    const addAlCarrito = (items , cantidad ) => {
        if (estaEnCarrito(items.id)) {
            alert('Este Producto Ya esta en el carrito');
        } else {
            setCarrito([...carrito, { ...items , cantidad }])
        }
        console.log('carrito', [...carrito,{...items, cantidad}]);
    };
    const estaEnCarrito = (id) => {
        return carrito.some((items) => items.id === id);
    };
    return (
        <CartContext.Provider value={{ carrito, addAlCarrito}}>
            {children}
        </CartContext.Provider>
    );
};