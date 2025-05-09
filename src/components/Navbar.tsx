import { useEffect, useRef } from "react";
import { CartIcon, CloseIcon, HamburgerIcon } from "./SVG.tsx";
import avatar from "/images/image-avatar.png";

export function Navbar() {
  const primaryNav = useRef<HTMLDivElement>(null),
    navToggle = useRef<HTMLButtonElement>(null),
    closeNav = useRef<HTMLButtonElement>(null);

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
      <div className="primary-header__nav-container flex">
        <button
          className={"mobile-nav-toggle"}
          aria-controls={"primary-navigation"}
          aria-expanded={"false"}
          ref={navToggle}
        >
          <HamburgerIcon />
        </button>

        <div className={"brand"}>sneakers</div>

        <div className="nav-menu" data-visible={"false"} ref={primaryNav}>
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

        <div className="profile-container">
          <div className="cart">
            <CartIcon />
          </div>
          <div className="profile">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
