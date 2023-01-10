import * as React from 'react';
function SvgSend(props) {
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
      <g clipPath="url(#Send_svg__clip0_457_3521)">
        <path
          d="M15.707.293a1 1 0 00-1.043-.234l-14 5a.999.999 0 00-.111 1.835l4.586 2.292L10.999 5l-4.186 5.862 2.292 4.586a1.004 1.004 0 001.838-.112l5-14c.129-.363.037-.77-.236-1.043z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="Send_svg__clip0_457_3521">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgSend;
