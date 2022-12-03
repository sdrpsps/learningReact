import React from 'react';
/* context 相当于一个公共的存储空间 */
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  addMealHandler: () => {},
  subMealHandler: () => {},
});

export default CartContext;
