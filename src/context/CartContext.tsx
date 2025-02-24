import { createContext, useContext, ReactNode } from "react";

type CartContextType = {
  children: ReactNode;
};

const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartContextType) {
  function increaseQuantity() {
    console.log("increaseQuantity");
  }

  function decreaseQuantity() {
    console.log("decreaseQuantity");
  }
  return (
    <CartContext.Provider value={{ increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
