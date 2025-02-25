import { ReactNode } from "react";

type ButtonType = {
  text?: string;
  btnClass?: string;
  icon?: ReactNode;
  btnFunction?: () => void;
};

type QuantityType = {
  icon?: ReactNode;
  icon2?: ReactNode;
  text?: string;
  btnClass?: string;
  btnFunction?: () => void;
};

export function Button({ text, btnClass, icon, btnFunction }: ButtonType) {
  return (
    <button className={btnClass} onClick={btnFunction}>
      {icon}
      {text}
    </button>
  );
}

export function QuantityBtn({
  icon,
  icon2,
  text,
  btnClass,
  btnFunction,
}: QuantityType) {
  const btnAttributes = [
    { id: 1, _icon: icon, _btnFunction: btnFunction },
    { id: 2, _icon: icon2, _btnFunction: btnFunction },
  ];

  return (
    <div className={"quantity-btn-container"}>
      <Button
        icon={btnAttributes[0]._icon}
        btnFunction={btnAttributes[0]._btnFunction}
      />

      <span>{text}</span>

      <Button
        icon={btnAttributes[1]._icon}
        btnFunction={btnAttributes[1]._btnFunction}
      />
    </div>
  );
}
