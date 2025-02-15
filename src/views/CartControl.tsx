import { Button } from "../components/Button";

export function CartControl() {
  return (
    <div className="cart-control">
      <Button text="3" btnClass="quantity" />
      <Button text="Add to Cart" btnClass="add-to-cart" />
    </div>
  );
}
