import { ReactNode } from "react";

type ButtonType = {
  text: string;
  btnClass: string;
  icon?: ReactNode;
  icon2?: ReactNode;
};

export function Button({ text, btnClass, icon, icon2 }: ButtonType) {
  return (
    <button className={btnClass}>
      {icon}
      {text}
      {icon2}
    </button>
  );
}
