import { Button } from "../components/Button";
import { CartIcon, AddIcon, SubtractIcon } from "../components/SVG.tsx";

export function CartControl() {
  return (
    <div className="cart-control">
      <Button
        text="3"
        btnClass="quantity"
        icon={<SubtractIcon />}
        icon2={<AddIcon />}
      />

      <Button text="Add to Cart" btnClass="add-to-cart" icon={<CartIcon />} />
    </div>
  );
}
