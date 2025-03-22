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

  return (
    <div className="navbar-links">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
