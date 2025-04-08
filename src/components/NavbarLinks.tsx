import { MobileMenuBtn } from "./MobileMenuBtn.tsx";
import { CloseIcon } from "./SVG.tsx";
import { forwardRef, useRef, useEffect } from "react";

export const NavbarLinks = forwardRef<HTMLUListElement>((_props, ref) => {
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

  function CloseMenu() {
    alert("Close menu");
  }

  const menuClose = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    menuClose.current?.addEventListener("click", () => {
      CloseMenu();
    });
  }, []);
  return (
    <div className="navbar-links">
      <MobileMenuBtn
        image={<CloseIcon />}
        _function={CloseMenu}
        _aria={"nav-link-items"}
        ref={menuClose}
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
