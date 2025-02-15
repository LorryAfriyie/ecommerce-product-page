type ButtonType = {
  text: string;
  btnClass: string;
};

export function Button({ text, btnClass }: ButtonType) {
  return <button className={btnClass}>{text}</button>;
}
