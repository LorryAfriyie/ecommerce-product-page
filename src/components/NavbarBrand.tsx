import { forwardRef } from "react";

export const NavbarBrand = forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <>
      <svg
        width="16"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        className="menu-icon"
        aria-controls="false"
        ref={ref}
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
});
