import { useRef, useEffect } from "react";

interface NavbarBrandType {
  menu: () => void;
}

export function NavbarBrand({ menu }: NavbarBrandType) {
  const btnOpenMenu = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    btnOpenMenu.current?.addEventListener("click", menu);
  }, [menu]);

  return (
    <>
      <svg
        width="16"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        className="menu-icon"
        ref={btnOpenMenu}
      >
        <path
          d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
          fill="#69707D"
          fillRule="evenodd"
        />
      </svg>

      <div className="navbar__brand">
        <h2>sneakers</h2>
      </div>
    </>
  );
}
