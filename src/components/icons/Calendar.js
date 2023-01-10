import * as React from 'react';
function SvgCalendar(props) {
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
      <g clipPath="url(#Calendar_svg__clip0_478_1455)">
        <path
          d="M14 3h-1V1a1 1 0 00-2 0v2H5V1a1 1 0 00-2 0v2H2a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2zM2 14V7h12v7H2z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="Calendar_svg__clip0_478_1455">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgCalendar;
