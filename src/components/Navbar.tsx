import { useEffect, useRef, useState } from "react";
import { CloseIcon, HamburgerIcon } from "./SVG.tsx";
import { useCart } from "../context/CartContext.tsx";
import avatar from "/images/image-avatar.png";

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
    console.log(open);
    // Change the opacity of the dropdown when open state is true/false
    /*if (open && dropdown.current) {
                                                                                                                                                                          dropdown.current.style.opacity = "1";
                                                                                                                                                                        } else dropdown.current!.style.opacity = "0";*/
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

    console.log(product.prodPrice);
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
            <button onClick={openDropdown}>cart</button>
            {/* <div className="cart">
              <span className={"quantity-badge"}>{product.prodQuantity}</span>
              <CartIcon />
            </div>*/}

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
                    <p>Cart is empty</p>
                  ) : (
                    <div className={"cart-content-grid"}>
                      <div className={"product-img"}>
                        <img src={product.prodImg} alt="" />
                      </div>
                      <div className={"product-details"}>
                        <p>{product.prodName}</p>
                        <p>{product.prodPrice}</p>
                      </div>
                      <div className={"delete"}>
                        <button
                          className={"empty-cart"}
                          onClick={deleteFromCart}
                        >
                          delete
                        </button>
                      </div>
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
