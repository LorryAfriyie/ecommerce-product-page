import { NavbarBrand } from "./NavbarBrand.tsx";
import { NavbarLinks } from "./NavbarLinks.tsx";
import { NavbarProfile } from "./NavbarProfile.tsx";
import { MobileMenuBtn } from "./MobileMenuBtn.tsx";
import { HamburgerIcon } from "./SVG.tsx";

export function Navbar() {
  const OpenMenu = () => alert("Open");

  return (
    <nav className="navbar">
      <div className={"navbar__container"}>
        <MobileMenuBtn image={<HamburgerIcon />} _function={OpenMenu} />
        <NavbarBrand />
        <NavbarLinks />
      </div>

      <NavbarProfile />
    </nav>
  );
}
