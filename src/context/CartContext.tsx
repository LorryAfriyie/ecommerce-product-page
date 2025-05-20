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
  slider: boolean;
  setSlider: Dispatch<SetStateAction<boolean>>;
  handleSlider: () => void;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;

  product: {
    prodName: string;
    prodPrice: number;
    prodQuantity: number;
    prodFinalPrice: number;
    prodImg: string;
  };
};

type CartContextType = {
  children: ReactNode;
};

type ProductDetails = {
  prodName: string;
  prodPrice: number;
  prodQuantity: number;
  prodFinalPrice: number;
  prodImg: string;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartContextType) {
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [slider, setSlider] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const PRICE = 125;

  const [product, setProduct] = useState<ProductDetails>({
    prodName: "",
    prodPrice: PRICE,
    prodQuantity: 0,
    prodFinalPrice: 0,
    prodImg: "",
  });

  // Increasing item quantity
  function increaseQuantity() {
    setCartQuantity((cartQuantity) => cartQuantity + 1);
  }

  // Decreasing item quantity
  function decreaseQuantity() {
    setCartQuantity((cartQuantity) =>
      cartQuantity > 1 ? cartQuantity - 1 : 0,
    );
  }

  function productCalculation(): number {
    if (cartQuantity) return cartQuantity * PRICE;
    return cartQuantity * PRICE;
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
      prodPrice: product.prodPrice != 0 ? product.prodPrice : PRICE,
      prodImg: img,
    });
  }

  function deleteFromCart() {
    setProduct({
      prodName: "",
      prodQuantity: 0,
      prodPrice: 0,
      prodFinalPrice: 0,
      prodImg: "",
    });
    setCartQuantity(0);
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
