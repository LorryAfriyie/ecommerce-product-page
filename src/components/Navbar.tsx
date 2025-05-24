import { forwardRef, useEffect, useRef, useState } from "react";
import { CloseIcon, HamburgerIcon } from "./SVG.tsx";
import { useCart } from "../context/CartContext.tsx";
import avatar from "/images/image-avatar.png";
import { DropdownMenu } from "./DropdownMenu.tsx";
import { Cart } from "./Cart.tsx";

export function Navbar() {
  const { product } = useCart();
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
          <NavbarList ref={closeNav} />
        </div>

        <div className={"profile-container"}>
          <div className={"profile-container__dropdown"}>
            <Cart openDropdown={openDropdown} quantity={quantity} />

            {open && <DropdownMenu ref={dropdown} open={open} />}
          </div>

          <div className={"profile"}>
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

const NavbarList = forwardRef<HTMLButtonElement>((props, ref) => {
  const navList = [
    { name: "Collections" },
    { name: "Men" },
    { name: "Women" },
    { name: "About" },
    { name: "Contact" },
  ];

  return (
    <nav>
      <button className={"close"} ref={ref}>
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
  );
});
