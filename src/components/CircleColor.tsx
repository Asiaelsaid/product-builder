import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor: React.FC<IProps> = ({ color, ...rest }) => {
  return (
    <span
      className={`block mb-2 w-6 h-6  rounded-full cursor-pointer`}
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export default CircleColor;
