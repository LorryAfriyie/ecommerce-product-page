import { NavbarBrand } from "./NavbarBrand.tsx";
import { NavbarLinks } from "./NavbarLinks.tsx";
import { NavbarProfile } from "./NavbarProfile.tsx";
import { MobileMenuBtn } from "./MobileMenuBtn.tsx";
import { HamburgerIcon } from "./SVG.tsx";
import { useRef, useEffect } from "react";

export function Navbar() {
  function OpenMenu() {
    alert("Open menu");
  }

  const navLinkItems = useRef<HTMLUListElement | null>(null),
    menuBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    menuBtn.current?.addEventListener("click", () => {
      OpenMenu();
    });
  }, []);
  return (
    <nav className="navbar">
      <div className={"navbar__container"}>
        <MobileMenuBtn
          image={<HamburgerIcon />}
          _function={OpenMenu}
          ref={menuBtn}
        />
        <NavbarBrand />
        <NavbarLinks ref={navLinkItems} />
      </div>

      <NavbarProfile />
    </nav>
  );
}
