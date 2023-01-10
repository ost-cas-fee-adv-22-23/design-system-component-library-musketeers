import * as React from 'react';
function SvgLogOut(props) {
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
      <g clipPath="url(#Log_Out_svg__clip0_447_767)" fill="currentColor">
        <path d="M6.293 11.955a.5.5 0 00.536-.079l4-3.5a.5.5 0 000-.752l-4-3.5A.5.5 0 006 4.5V7H1a1 1 0 000 2h5v2.5a.5.5 0 00.293.455z" />
        <path d="M14 0H2a2 2 0 00-2 2v2a1 1 0 002 0V2h12v12H2v-2a1 1 0 10-2 0v2a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2z" />
      </g>
      <defs>
        <clipPath id="Log_Out_svg__clip0_447_767">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgLogOut;
