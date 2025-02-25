import { SVGAttributes } from "react";

export const BurgerIcon: React.FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="36"
      height="34"
      viewBox="0 0 36 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35 7.93332H1M35 26.0666H14.6M35 17H21.4"
        stroke={props.color ?? "#92E3A9"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
