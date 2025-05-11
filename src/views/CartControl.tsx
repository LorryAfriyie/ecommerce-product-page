import { useState } from "react";
import { Button, QuantityBtn } from "../components/Button";
import { AddIcon, CartIcon, SubtractIcon } from "../components/SVG.tsx";
import { useCart } from "../context/CartContext.tsx";

export function CartControl() {
  const { increaseQuantity, decreaseQuantity, cartQuantity } = useCart();
  const [show, setShow] = useState<boolean>(false);

  function handleShow() {
    setShow((current) => !current);
  }

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
        btnFunction={handleShow}
      />
    </div>
  );
}
