export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <svg
          width="16"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          className="menu-icon"
        >
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg>
        <div className="navbar-brand">
          <h2>sneakers</h2>
        </div>
        <ul className="navbar-link">
          <li>
            <a href="">Collection</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-cart">
        <div className="cart">cart here</div>
        <div className="profile-icon">profile here</div>
      </div>
    </nav>
  );
}
