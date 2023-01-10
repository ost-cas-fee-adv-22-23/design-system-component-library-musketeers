import * as React from 'react';
function SvgArrowLeft(props) {
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
      <path d="M15 4H7V1A1 1 0 005.375.219l-5 4a1 1 0 000 1.562l5 4A1 1 0 007 9V6h8a1 1 0 000-2z" fill="currentColor" />
    </svg>
  );
}
export default SvgArrowLeft;
