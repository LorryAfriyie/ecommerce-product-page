import { useEffect, useRef, useState } from "react";
import { CartIcon, CloseIcon, DeleteIcon, HamburgerIcon } from "./SVG.tsx";
import { useCart } from "../context/CartContext.tsx";
import avatar from "/images/image-avatar.png";
import { formatCurrency } from "../utilities/currencyFormat.ts";

export function Navbar() {
  const { product, deleteFromCart } = useCart();
  const primaryNav = useRef<HTMLDivElement>(null),
    navToggle = useRef<HTMLButtonElement>(null),
    closeNav = useRef<HTMLButtonElement>(null),
    dropdown = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);

  function openDropdown() {
    // Update boolean value
    setOpen((current) => !current);
  }

  function quantity() {
    if (product.prodQuantity !== undefined && product.prodQuantity > 0)
      return product.prodQuantity;
  }

  const navList = [
    { name: "Collections" },
    { name: "Men" },
    { name: "Women" },
    { name: "About" },
    { name: "Contact" },
  ];

  useEffect(() => {
    navToggle.current?.addEventListener("click", () => {
      const visibility = primaryNav.current?.getAttribute("data-visible");

      if (visibility === "false") {
        primaryNav.current?.setAttribute("data-visible", "true");
        navToggle.current?.setAttribute("aria-expanded", "true");
      }
    });

    closeNav.current?.addEventListener("click", () => {
      const visibility = primaryNav.current?.getAttribute("data-visible");

      if (visibility === "true") {
        primaryNav.current?.setAttribute("data-visible", "false");
        navToggle.current?.setAttribute("aria-expanded", "false");
      }
    });
  }, []);

  return (
    <header className={"primary-header"}>
      <div className={"primary-header__nav-container flex"}>
        <button
          className={"mobile-nav-toggle"}
          aria-controls={"primary-navigation"}
          aria-expanded={"false"}
          ref={navToggle}
        >
          <HamburgerIcon />
        </button>
        <div className={"brand"}>sneakers</div>
        <div className={"nav-menu"} data-visible={"false"} ref={primaryNav}>
          <nav>
            <button className={"close"} ref={closeNav}>
              <CloseIcon />
            </button>

            <ul id={"primary-navigation"} className={"primary-navigation flex"}>
              {navList.map((item, index) => {
                return (
                  <li key={index} className={"primary-navigation-item"}>
                    <a href="#">{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className={"profile-container"}>
          <div className={"profile-container__dropdown"}>
            <div className={"profile-container__cart"} onClick={openDropdown}>
              <span className={"quantity-badge"}>{quantity()}</span>
              <button className={"profile-container__cart-btn"}>
                <CartIcon />
              </button>
            </div>

            {open && (
              <div
                className={`profile-container__dropdown-menu ${open && "open"}`}
                ref={dropdown}
              >
                <div className={"cart-header"}>
                  <p>Cart</p>
                </div>
                <div className={"cart-content"}>
                  {product.prodQuantity === 0 ? (
                    <div className={"cart-content__message-block"}>
                      <p className={"cart-content__message"}>
                        Your cart is empty.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className={"cart-content-grid"}>
                        <div className={"product-img"}>
                          <img src={product.prodImg} alt="" />
                        </div>
                        <div className={"product-details"}>
                          <p className={"product-details__name"}>
                            {product.prodName}
                          </p>
                          <p className={"product-details__price"}>
                            <span>{`${formatCurrency(product.prodPrice)} x ${product.prodQuantity}`}</span>
                            <span
                              className={"final-price"}
                            >{` ${formatCurrency(product.prodFinalPrice)}`}</span>
                          </p>
                        </div>
                        <div className={"delete"}>
                          <button
                            className={"empty-cart"}
                            onClick={deleteFromCart}
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                      <button className="checkout">Checkout</button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className={"profile"}>
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
