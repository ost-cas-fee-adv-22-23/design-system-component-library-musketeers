import * as React from 'react';
function SvgUpload(props) {
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
      <path d="M14 10a1 1 0 00-1 1v2H3v-2a1 1 0 00-2 0v2a2 2 0 002 2h10a2 2 0 002-2v-2a1 1 0 00-1-1z" fill="currentColor" />
      <path
        d="M4.707 6.707L7 4.414V10a1 1 0 102 0V4.414l2.293 2.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgUpload;
