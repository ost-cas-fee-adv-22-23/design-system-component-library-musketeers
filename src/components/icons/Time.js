import * as React from 'react';
function SvgTime(props) {
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
      <g clipPath="url(#Time_svg__clip0_418_80)" fill="currentColor">
        <path d="M8 0a8 8 0 108 8 8.024 8.024 0 00-8-8zm0 14a6 6 0 116-6 6.018 6.018 0 01-6 6z" />
        <path d="M11.5 7H9V4.5a1 1 0 10-2 0V8a1 1 0 001 1h3.5a1 1 0 100-2z" />
      </g>
      <defs>
        <clipPath id="Time_svg__clip0_418_80">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgTime;
