import * as React from 'react';
function SvgEye(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.color}
      {...props}
    >
      <g clipPath="url(#Eye_svg__clip0_427_455)" fill="currentColor">
        <path d="M8 14c4.707 0 7.744-5.284 7.871-5.508a1 1 0 00.001-.98C15.746 7.287 12.732 2 8 2 3.245 2 .251 7.289.126 7.514a.998.998 0 00.002.975C.254 8.713 3.27 14 8 14zM8 4c2.84 0 5.036 2.835 5.818 4-.784 1.166-2.98 4-5.818 4-2.84 0-5.038-2.838-5.819-4.001C2.958 6.835 5.146 4 8.001 4z" />
        <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" />
      </g>
      <defs>
        <clipPath id="Eye_svg__clip0_427_455">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgEye;
