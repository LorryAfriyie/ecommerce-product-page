import { ReactNode, forwardRef } from "react";

type MobileMenuBtn = {
  image?: ReactNode;
  _function?: () => void;
  _aria: string;
};

export const MobileMenuBtn = forwardRef<HTMLButtonElement, MobileMenuBtn>(
  (props, ref) => {
    return (
      <button className={"menu-icon"} onClick={props._function} ref={ref}>
        {props.image}
      </button>
    );
  }
);
