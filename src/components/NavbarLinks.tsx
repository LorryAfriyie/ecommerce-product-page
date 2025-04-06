import { MobileMenuBtn } from "./MobileMenuBtn.tsx";
import { CloseIcon } from "./SVG.tsx";
import { forwardRef } from "react";

export const NavbarLinks = forwardRef<HTMLUListElement>((props, ref) => {
  //   Navbar Items
  const navItems = [
    { href: "#", label: "Collections" },
    {
      href: "#",
      label: "Men",
    },
    {
      href: "#",
      label: "Women",
    },
    {
      href: "#",
      label: "About",
    },
    {
      href: "#",
      label: "Contact",
    },
  ];

  const CloseMenu = () => {};

  return (
    <div className="navbar-links">
      <MobileMenuBtn
        image={<CloseIcon />}
        _function={CloseMenu}
        _aria={"nav-link-items"}
      />
      <ul
        className={"nav-link-items"}
        id={"nav-link-items"}
        data-visible={"false"}
        ref={ref}
      >
        {navItems.map((item, index) => (
          <li key={index} className={"nav-item"}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
});
