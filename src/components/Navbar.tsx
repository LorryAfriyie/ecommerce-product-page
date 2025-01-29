import { useRef } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarProfile } from "./NavbarProfile";
import { NavbarBrand } from "./NavbarBrand";

export function Navbar() {
  const menu = useRef<HTMLDivElement | null>(null),
    body = document.querySelector("body");

  function OpenMenu() {
    const visibility = menu.current!.getAttribute("data-visible");

    if (visibility === "false") {
      menu.current?.setAttribute("data-visible", true);
      body!.classList.add("overlay");
    }

    if (visibility === "true") {
      menu.current?.setAttribute("data-visible", false);
      body!.classList.remove("overlay");
    }
  }

  return (
    <nav className="navbar">
      <NavbarBrand menu={OpenMenu} />

      <div className="navbar__menu" ref={menu} data-visible={false}>
        <div className="navbar__items">
          <NavbarLinks />
        </div>

        <NavbarProfile />
      </div>
    </nav>
  );
}
