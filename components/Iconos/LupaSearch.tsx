interface Props {
  width: string;
  height: string;
  color: string;
}
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import React from "react";

const LupaSearch = ({ width, height, color }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path
        d="M13.5417 11.9167H12.6858L12.3825 11.6242C13.4442 10.3892 14.0833 8.78583 14.0833 7.04167C14.0833 3.1525 10.9308 0 7.04167 0C3.1525 0 0 3.1525 0 7.04167C0 10.9308 3.1525 14.0833 7.04167 14.0833C8.78583 14.0833 10.3892 13.4442 11.6242 12.3825L11.9167 12.6858V13.5417L17.3333 18.9475L18.9475 17.3333L13.5417 11.9167ZM7.04167 11.9167C4.34417 11.9167 2.16667 9.73917 2.16667 7.04167C2.16667 4.34417 4.34417 2.16667 7.04167 2.16667C9.73917 2.16667 11.9167 4.34417 11.9167 7.04167C11.9167 9.73917 9.73917 11.9167 7.04167 11.9167Z"
        fill={color}
      />
    </svg>
  );
};

export default LupaSearch;