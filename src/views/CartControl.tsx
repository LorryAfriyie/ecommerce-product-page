import { Button, QuantityBtn } from "../components/Button";
import { AddIcon, CartIcon, SubtractIcon } from "../components/SVG.tsx";
import { useCart } from "../context/CartContext.tsx";

type CartControlProps = {
  img: string;
};

export function CartControl({ img }: CartControlProps) {
  const { increaseQuantity, decreaseQuantity, cartQuantity, addToCart } =
    useCart();

  return (
    <div className="cart-control">
      <QuantityBtn
        icon={<SubtractIcon />}
        icon2={<AddIcon />}
        text={cartQuantity}
        btnFunction={decreaseQuantity}
        btnFunction2={increaseQuantity}
      />

      <Button
        text="Add to Cart"
        btnClass="add-to-cart"
        icon={<CartIcon />}
        btnFunction={() => addToCart(img)}
      />
    </div>
  );
}
