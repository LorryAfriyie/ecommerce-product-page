import { NavbarLinks } from "./NavbarLinks";
import { NavbarProfile } from "./NavbarProfile";
import { NavbarBrand } from "./NavbarBrand";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__items">
        <NavbarBrand />

        <NavbarLinks />
      </div>

      <NavbarProfile />
    </nav>
  );
}
