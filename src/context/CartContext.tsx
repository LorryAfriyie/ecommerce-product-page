import { createContext, useContext, useState, ReactNode } from "react";

type CartContext = {
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  cartQuantity: number | null;
};

type CartContextType = {
  children: ReactNode;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartContextType) {
  const [cartQuantity, setCartQuantity] = useState<number | null>(0);

  function increaseQuantity() {
    if (typeof cartQuantity === "number")
      setCartQuantity((cartQuantity) => cartQuantity + 1);
  }

  function decreaseQuantity() {
    if (typeof cartQuantity === "number")
      setCartQuantity((cartQuantity) => cartQuantity - 1);
  }
  return (
    <CartContext.Provider
      value={{ increaseQuantity, decreaseQuantity, cartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
