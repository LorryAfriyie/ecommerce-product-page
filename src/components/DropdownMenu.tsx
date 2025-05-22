import { forwardRef } from "react";
import { formatCurrency } from "../utilities/currencyFormat.ts";
import { DeleteIcon } from "./SVG.tsx";
import { useCart } from "../context/CartContext.tsx";

interface DropdownMenuProps {
  open: boolean;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (props, ref) => {
    const { product } = useCart();
    return (
      <div
        className={`profile-container__dropdown-menu ${props.open && "open"}`}
        ref={ref}
      >
        <div className={"cart-header"}>
          <p>Cart</p>
        </div>
        <div className={"cart-content"}>
          {product.prodQuantity === 0 ? <EmptyCart /> : <CartContentGrid />}
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

const CartContentGrid = () => {
  const { product, deleteFromCart } = useCart();
  return (
    <div>
      <div className={"cart-content-grid"}>
        <div className={"product-img"}>
          <img src={product.prodImg} alt="" />
        </div>
        <div className={"product-details"}>
          <p className={"product-details__name"}>{product.prodName}</p>
          <p className={"product-details__price"}>
            <span>{`${formatCurrency(product.prodPrice)} x ${product.prodQuantity}`}</span>
            <span
              className={"final-price"}
            >{` ${formatCurrency(product.prodFinalPrice)}`}</span>
          </p>
        </div>
        <div className={"delete"}>
          <button className={"empty-cart"} onClick={deleteFromCart}>
            <DeleteIcon />
          </button>
        </div>
      </div>
      <button className="checkout">Checkout</button>
    </div>
  );
};
