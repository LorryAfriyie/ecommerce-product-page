import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type CartContext = {
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  cartQuantity: number | null;
  slider: boolean | null;
  setSlider: Dispatch<SetStateAction<boolean | null>>;
  handleSlider: () => void;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
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
  const [slider, setSlider] = useState<boolean | null>(false);
  const [index, setIndex] = useState<number>(0);

  // Increasing item quantity
  function increaseQuantity() {
    if (typeof cartQuantity === "number")
      setCartQuantity((cartQuantity) =>
        cartQuantity != null ? cartQuantity + 1 : null,
      );
  }

  // Decreasing item quantity
  function decreaseQuantity() {
    if (typeof cartQuantity === "number")
      setCartQuantity((cartQuantity) =>
        cartQuantity != null ? (cartQuantity > 1 ? cartQuantity - 1 : 0) : null,
      );
  }

  // Toggle Image Slider
  function handleSlider() {
    setSlider((current) => !current);
  }

  return (
    <CartContext.Provider
      value={{
        increaseQuantity,
        decreaseQuantity,
        cartQuantity,
        slider,
        setSlider,
        handleSlider,
        index,
        setIndex,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
