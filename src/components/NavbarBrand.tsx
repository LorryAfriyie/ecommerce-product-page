import { forwardRef } from "react";

export const NavbarBrand = forwardRef<HTMLButtonElement>((_props, ref) => {
  return (
    <>
      <button
        className={"menu-icon"}
        aria-expanded={"false"}
        aria-controls={"menu"}
        ref={ref}
      ></button>

      <div className="navbar__brand">
        <h1>sneakers</h1>
      </div>
    </>
  );
});
