import { Button, QuantityBtn } from "../components/Button";
import { CartIcon, AddIcon, SubtractIcon } from "../components/SVG.tsx";

export function CartControl() {
  return (
    <div className="cart-control">
      <QuantityBtn icon={<SubtractIcon />} icon2={<AddIcon />} text={"3"} />
      {/*<Button text="3" btnClass="quantity" icon={<SubtractIcon />} />*/}

      <Button text="Add to Cart" btnClass="add-to-cart" icon={<CartIcon />} />
    </div>
  );
}
