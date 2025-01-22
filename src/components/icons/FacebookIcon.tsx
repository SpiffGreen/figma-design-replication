import { SVGAttributes } from "react";

export const FacebookIcon: React.FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 20.3333C5.84536 20.3333 1.66669 16.1546 1.66669 11C1.66669 5.84533 5.84536 1.66666 11 1.66666C16.1547 1.66666 20.3334 5.84533 20.3334 11C20.3334 16.1546 16.1547 20.3333 11 20.3333ZM11 20.3333V9.66666C11 8.1939 12.1939 6.99999 13.6667 6.99999H14.3334M7.66669 12.3333H14.3334"
        stroke={props.color ?? "#4F4F4F"}
        stroke-width="2"
      />
    </svg>
  );
};
