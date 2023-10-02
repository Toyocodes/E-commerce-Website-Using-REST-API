import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Calculate the total price and item amount
    const totalPrice = savedCart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
  
    const totalAmount = savedCart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);
  
    setTotal(totalPrice);
    setItemAmount(totalAmount);
    setCart(savedCart)
  }, [cart]); 
   
  //the cart here will re-run whenever the cart state changes. This ensures that itemAmount is updated whenever items are added or removed from the cart.

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    
    // Get the existing cart items from localStorage (if any)
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = existingCart.find((item) => {
      return item.id === id;
    });

    // Check if the item is already in the cart
    if (cartItem) {
      const newCart = existingCart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
      setCart(newCart);
    } else {
      const newCart = [...existingCart, newItem];
      localStorage.setItem('cart', JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  //remove cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  //clear cart
  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  //increase quantity
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

//decrease quantity
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });

      if (cartItem.amount < 2) {
        removeFromCart(id);
      }

      localStorage.setItem('cart', JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
