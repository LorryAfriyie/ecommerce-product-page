import { NavbarBrand } from "./NavbarBrand.tsx";
import { NavbarLinks } from "./NavbarLinks.tsx";
import { NavbarProfile } from "./NavbarProfile.tsx";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className={"navbar__container"}>
        <NavbarBrand />
        <NavbarLinks />
      </div>

      <NavbarProfile />
    </nav>
  );
}
