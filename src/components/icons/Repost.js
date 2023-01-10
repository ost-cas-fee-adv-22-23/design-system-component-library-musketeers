import * as React from 'react';
function SvgRepost(props) {
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
      <g clipPath="url(#Repost_svg__clip0_413_274)">
        <path
          d="M14.413.389a.5.5 0 00-.849-.235l-1.488 1.559a7.494 7.494 0 103.062 8.595 1 1 0 00-1.9-.616 5.513 5.513 0 11-2.573-6.5l-1.6 1.68a.5.5 0 00.27.837L15.157 6.8a.478.478 0 00.31-.04.5.5 0 00.27-.563L14.412.389z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="Repost_svg__clip0_413_274">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgRepost;
