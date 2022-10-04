import { useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const isInCart = (id) => {
    return cart.some((item) => item.id === id);    
  };

  useEffect(() => {}, [cart]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      alert('Ya esta agregado al carrito');
      return false;
    } else {
      setCart([...cart, { ...item, quantity }]);
      return true; 
    }
  };
  
  const clear = () => {
    setCart([]);
  };

  const removeItem = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};