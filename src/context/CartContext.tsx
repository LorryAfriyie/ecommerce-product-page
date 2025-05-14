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
  addToCart: (img: string) => void;
  cartQuantity: number | null;
  deleteFromCart: () => void;
  slider: boolean | null;
  setSlider: Dispatch<SetStateAction<boolean | null>>;
  handleSlider: () => void;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;

  product: {
    prodName: string;
    prodPrice?: number;
    prodQuantity?: number;
    prodFinalPrice?: number;
    prodImg?: string;
  };
};

type CartContextType = {
  children: ReactNode;
};

type ProductDetails = {
  prodName: string;
  prodPrice?: number;
  prodQuantity?: number;
  prodFinalPrice?: number;
  prodImg?: string;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartContextType) {
  const [cartQuantity, setCartQuantity] = useState<number | null>(0);
  const [slider, setSlider] = useState<boolean | null>(false);
  const [index, setIndex] = useState<number>(0);

  const [product, setProduct] = useState<ProductDetails>({
    prodName: "",
    prodPrice: 125,
    prodQuantity: 0,
    prodFinalPrice: 0,
    prodImg: "",
  });

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

  function productCalculation() {
    if (cartQuantity && product.prodPrice)
      return cartQuantity * product.prodPrice;
  }

  // Toggle Image Slider
  function handleSlider() {
    setSlider((current) => !current);
  }

  function addToCart(img: string) {
    setProduct({
      prodName: "Fall Limited Edition Sneakers",
      prodQuantity: cartQuantity as number,
      prodFinalPrice: productCalculation(),
      prodPrice: product.prodPrice,
      prodImg: img,
    });
  }

  function deleteFromCart() {
    setProduct({
      prodName: "",
      prodQuantity: 0,
      prodFinalPrice: 0,
      prodImg: "",
    });
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
        product,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
