type ButtonType = {
  text: string;
};

export function Button({ text }: ButtonType) {
  return <button>{text}</button>;
}
