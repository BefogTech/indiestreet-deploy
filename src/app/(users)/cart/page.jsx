"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => (
  <div className="flex justify-between items-center py-2">
    <div className="flex items-center">
      <img src={item.images[0]} alt={item.title} className="w-16 h-16 mr-4" />
      <div>
        <p className="font-bold">{item.title}</p>
      </div>
    </div>
    <div className="flex items-center">
      <Button variant="outline" size="sm" className="mx-2" onClick={() => onDecrease(item.id)}>-</Button>
      <Input width="50px" textAlign="center" value={item.quantity} readOnly className="text-center w-12" />
      <Button variant="outline" size="sm" className="mx-2" onClick={() => onIncrease(item.id)}>+</Button>
    </div>
    <p>₹ {item.price.toFixed(2)}</p>
    <Button variant="link" colorScheme="red" size="sm" onClick={() => onRemove(item.id)}>Remove Item</Button>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
console.log(cartItems);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncrease = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    updateCart(updatedCart);
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl mb-4">Cart</h2>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      ))}
      <div className="mt-4 p-4 border border-gray-200">
        <div className="flex justify-between mb-2">
          <p>Subtotal:</p>
          <p>₹ {subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Discount:</p>
          <p>₹ 0</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>IGST:</p>
          <p>₹ 0</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>CGST:</p>
          <p>₹ 0</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Total Including GST:</p>
          <p>₹ {subtotal.toFixed(2)}</p>
        </div>
        <Button className="mt-4 w-full" size="lg" colorScheme="purple">Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
