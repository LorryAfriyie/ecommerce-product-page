export function Navbar() {
  const navList = [
    { name: "Collections" },
    { name: "Men" },
    { name: "Women" },
    { name: "About" },
    { name: "Contact" },
  ];

  return (
    <header className={"primary-header flex"}>
      <div className={"brand"}>sneaker</div>

      <button
        className={"mobile-nav-toggle"}
        aria-controls={"primary-navigation"}
        aria-expanded={"false"}
      >
        menu
      </button>
      <nav>
        <ul id={"primary-navigation"} className={"primary-navigation flex"}>
          {navList.map((item, index) => {
            return (
              <li key={index} className={"primary-navigation-item"}>
                <a href="#">{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="profile-container">
        <div className="cart">cart</div>
        <div className="profile">profile</div>
      </div>
    </header>
  );
}
