import { MobileMenuBtn } from "./MobileMenuBtn.tsx";
import { CloseIcon } from "./SVG.tsx";

export function NavbarLinks() {
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

  const CloseMenu = () => alert("Close");

  return (
    <div className="navbar-links">
      <MobileMenuBtn image={<CloseIcon />} _function={CloseMenu} />
      <ul className={"nav-link-items"}>
        {navItems.map((item, index) => (
          <li key={index} className={"nav-item"}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
