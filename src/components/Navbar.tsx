import { useRef, useEffect } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarProfile } from "./NavbarProfile";
import { NavbarBrand } from "./NavbarBrand";

export function Navbar() {
  const menu = useRef<HTMLDivElement | null>(null),
    body = document.querySelector("body"),
    btnOpenMenu = useRef<SVGSVGElement | null>(null);

  function OpenMenu() {
    const visibility = menu.current!.getAttribute("data-visible");

    switch (visibility) {
      case "false":
        menu.current?.setAttribute("data-visible", true);
        body!.classList.add("overlay");
        break;
      case "true":
        menu.current?.setAttribute("data-visible", false);
        body!.classList.remove("overlay");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    btnOpenMenu.current!.addEventListener("click", OpenMenu);
  }, []);

  return (
    <nav className="navbar">
      <NavbarBrand ref={btnOpenMenu} />

      <div
        className="navbar__menu"
        ref={menu}
        data-visible={false}
      >
        <div className="navbar__items">
          <NavbarLinks />
        </div>
      </div>

      <NavbarProfile />
    </nav>
  );
}
