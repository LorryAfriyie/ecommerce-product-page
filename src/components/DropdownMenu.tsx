import { forwardRef } from "react";
import { formatCurrency } from "../utilities/currencyFormat.ts";
import { DeleteIcon } from "./SVG.tsx";
import { useCart } from "../context/CartContext.tsx";

interface DropdownMenuProps {
  open: boolean;
  toggleCart: () => void;
}

interface CartContentGrid {
  show: () => void;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (props, ref) => {
    const { product, deleteFromCart, setOpenModal } = useCart();
    const { prodQuantity } = product;
    const { open, toggleCart } = props;

    function showModal() {
      setOpenModal((current) => !current);
      deleteFromCart();
      toggleCart();
    }

    return (
      <div className={`profile-container__dropdown-menu ${open && "open"}`}>
        <div className={"cart-header"}>
          <p>Cart</p>
        </div>

        <div className={"cart-content"}>
          {prodQuantity === 0 ? (
            <EmptyCart />
          ) : (
            <CartContentGrid show={showModal} />
          )}
        </div>
      </div>
    );
  },
);

const EmptyCart = () => {
  return (
    <div className={"cart-content__message-block"}>
      <p className={"cart-content__message"}>Your cart is empty.</p>
    </div>
  );
};

const CartContentGrid = ({ show }: CartContentGrid) => {
  const { product, deleteFromCart } = useCart();
  const { prodImg, prodPrice, prodFinalPrice, prodQuantity, prodName } =
    product;

  return (
    <div>
      <div className={"cart-content-grid"}>
        <div className={"product-img"}>
          <img src={prodImg} alt="" />
        </div>

        <div className={"product-details"}>
          <p className={"product-details__name"}>{prodName}</p>

          <p className={"product-details__price"}>
            <span>{`${formatCurrency(prodPrice)} x ${prodQuantity}`}</span>

            <span
              className={"final-price"}
            >{` ${formatCurrency(prodFinalPrice)}`}</span>
          </p>
        </div>

        <div className={"delete"}>
          <button className={"empty-cart"} onClick={deleteFromCart}>
            <DeleteIcon />
          </button>
        </div>
      </div>
      <button className="checkout" onClick={show}>
        Checkout
      </button>
    </div>
  );
};
