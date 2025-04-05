import { ReactNode } from "react";

type MobileMenuBtn = {
  image: ReactNode;
  _function?: () => void;
};

export const MobileMenuBtn = ({ image, _function }: MobileMenuBtn) => {
  return (
    <button className={"menu-icon"} onClick={_function}>
      {image}
    </button>
  );
};
