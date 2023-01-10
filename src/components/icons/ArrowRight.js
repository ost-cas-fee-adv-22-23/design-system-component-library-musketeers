import * as React from 'react';
function SvgArrowRight(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.color}
      {...props}
    >
      <path
        d="M10.625.219A1 1 0 009 1v3H1a1 1 0 000 2h8v3a1 1 0 001.625.781l5-4a1 1 0 000-1.562l-5-4z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgArrowRight;
