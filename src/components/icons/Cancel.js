import * as React from 'react';
function SvgCancel(props) {
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
        d="M12.558 1.258a.5.5 0 00-.711.004L8 5.2 4.154 1.262a.5.5 0 00-.712-.004L1.258 3.442a.5.5 0 00.004.712L5.2 8l-3.938 3.847a.5.5 0 00-.004.71l2.184 2.185a.5.5 0 00.712-.004L8 10.8l3.847 3.938a.5.5 0 00.71.004l2.185-2.184a.5.5 0 00-.004-.711L10.8 8l3.938-3.846a.5.5 0 00.004-.712l-2.184-2.184z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgCancel;
