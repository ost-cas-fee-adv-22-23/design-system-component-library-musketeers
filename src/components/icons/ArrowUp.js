import * as React from 'react';
function SvgArrowUp(props) {
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
      <path
        d="M5.781.375a1.036 1.036 0 00-1.562 0l-4 5A1 1 0 001 7h3v8a1 1 0 002 0V7h3a1 1 0 00.781-1.625l-4-5z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgArrowUp;
