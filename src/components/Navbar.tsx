import { NavbarBrand } from "./NavbarBrand.tsx";
import { NavbarLinks } from "./NavbarLinks.tsx";
import { NavbarProfile } from "./NavbarProfile.tsx";
import { MobileMenuBtn } from "./MobileMenuBtn.tsx";
import { HamburgerIcon } from "./SVG.tsx";
import { useRef } from "react";

export function Navbar() {
  const OpenMenu = () => {
    const nav = document.querySelector(".nav-link-items"),
      menuToggle = document.querySelector(".menu-icon");

    menuToggle?.addEventListener("click", () => {
      const visibility = nav?.getAttribute("data-visible");

      console.log(visibility);
    });
  };

  const navLinkItems = useRef<HTMLUListElement | null>(null),
    menuBtn = useRef<HTMLButtonElement | null>(null);

  return (
    <nav className="navbar">
      <div className={"navbar__container"}>
        <MobileMenuBtn image={<HamburgerIcon />} _function={OpenMenu} />
        <NavbarBrand />
        <NavbarLinks ref={navLinkItems} />
      </div>

      <NavbarProfile />
    </nav>
  );
}
