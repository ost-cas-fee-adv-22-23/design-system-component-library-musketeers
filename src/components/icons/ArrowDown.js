import * as React from 'react';
function SvgArrowDown(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.color}
      {...props}
    >
      <path d="M9 9H6V1a1 1 0 00-2 0v8H1a1 1 0 00-.78 1.625l4 5a1 1 0 001.561 0l4-5A1 1 0 009.001 9z" fill="currentColor" />
    </svg>
  );
}
export default SvgArrowDown;
