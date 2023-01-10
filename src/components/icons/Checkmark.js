import * as React from 'react';
function SvgCheckmark(props) {
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
        d="M5.6 9.6L2.753 6.754a.5.5 0 00-.707 0L.353 8.446a.5.5 0 000 .708l4.893 4.893a.5.5 0 00.707 0l9.693-9.693a.5.5 0 000-.708l-1.693-1.692a.5.5 0 00-.707 0L5.6 9.6z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgCheckmark;
