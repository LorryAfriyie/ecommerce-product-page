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

  // Increasing item quantity
  function increaseQuantity() {
    if (typeof cartQuantity === "number")
      setCartQuantity((cartQuantity) =>
        cartQuantity != null ? cartQuantity + 1 : null
      );
  }

  // Decreasing item quantity
  function decreaseQuantity() {
    if (typeof cartQuantity === "number")
      setCartQuantity((cartQuantity) =>
        cartQuantity != null ? (cartQuantity > 1 ? cartQuantity - 1 : 0) : null
      );
  }
  return (
    <CartContext.Provider
      value={{ increaseQuantity, decreaseQuantity, cartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
