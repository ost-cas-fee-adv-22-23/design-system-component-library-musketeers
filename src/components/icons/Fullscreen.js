import * as React from 'react';
function SvgFullscreen(props) {
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
      <g clipPath="url(#Fullscreen_svg__clip0_447_528)" fill="currentColor">
        <path d="M15 0h-5a1 1 0 100 2h2.587L9.294 5.293a1 1 0 101.414 1.414L14 3.414V6a1 1 0 102 0V1a1 1 0 00-1-1zM6.707 9.293a1 1 0 00-1.414 0L2 12.586V10a1 1 0 00-2 0v5a1 1 0 001 1h5a1 1 0 000-2H3.414l3.293-3.293a1 1 0 000-1.414z" />
      </g>
      <defs>
        <clipPath id="Fullscreen_svg__clip0_447_528">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgFullscreen;
