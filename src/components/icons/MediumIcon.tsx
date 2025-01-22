import { SVGAttributes } from "react";

export const MediumIcon: React.FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M7.00002 6.99999L11 12.3333L15 6.99999M7.00002 6.99999H5.00002M7.00002 6.99999V15.6667M15 6.99999H17M15 6.99999V15.6667M5.00002 15H9.00002M13 15H17M3.00002 1.66666H19C19.7364 1.66666 20.3334 2.26361 20.3334 2.99999V19C20.3334 19.7364 19.7364 20.3333 19 20.3333H3.00002C2.26364 20.3333 1.66669 19.7364 1.66669 19V2.99999C1.66669 2.26361 2.26364 1.66666 3.00002 1.66666Z"
        stroke={props.color ?? "#4F4F4F"}
        stroke-width="2"
      />
    </svg>
  );
};
