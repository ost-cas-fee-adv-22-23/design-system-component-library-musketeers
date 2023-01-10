import * as React from 'react';
function SvgEdit(props) {
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
      <g clipPath="url(#Edit_svg__clip0_478_1401)" fill="currentColor">
        <path d="M8.1 3.5L.3 11.3c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1h3c.3 0 .5-.1.7-.3l7.8-7.8-4.4-4.4zM15.7 3.3l-3-3c-.4-.4-1-.4-1.4 0L9.5 2.1l4.4 4.4 1.8-1.8c.4-.4.4-1 0-1.4z" />
      </g>
      <defs>
        <clipPath id="Edit_svg__clip0_478_1401">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgEdit;
