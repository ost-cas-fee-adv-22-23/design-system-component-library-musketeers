import * as React from 'react';
function SvgProfile(props) {
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
      <path
        d="M8 7a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM8 8.5a7.008 7.008 0 00-7 7 .5.5 0 00.5.5h13a.5.5 0 00.5-.5 7.008 7.008 0 00-7-7z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgProfile;
