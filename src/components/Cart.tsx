import { CartIcon } from "./SVG.tsx";

interface CartProps {
  openDropdown: () => void;
  quantity: () => number;
}

const Cart = ({ openDropdown, quantity }: CartProps) => {
  return (
    <div className={"profile-container__cart"} onClick={openDropdown}>
      {quantity() > 0 && <span className={"quantity-badge"}>{quantity()}</span>}

      <button className={"profile-container__cart-btn"}>
        <CartIcon />
      </button>
    </div>
  );
};

export default Cart;
