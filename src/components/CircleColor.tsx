import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor: React.FC<IProps> = ({ color, ...rest }) => {
  return (
    <span
      className={`block mb-2 w-5 h-5  rounded-full cursor-pointer`}
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export default CircleColor;
