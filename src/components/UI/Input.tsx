import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IProps> = ({ ...rest }) => {
  return <input  className="border-2 p-1" {...rest}/>;
};

export default Input;
