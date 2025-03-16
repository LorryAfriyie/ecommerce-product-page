import { forwardRef } from "react";

export const NavbarBrand = forwardRef<HTMLButtonElement>((_props, ref) => {
  return (
    <div className={"navbar-brand"}>
      <div className={"brand-title"}>sneakers</div>
    </div>
  );
});
